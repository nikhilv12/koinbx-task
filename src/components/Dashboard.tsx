import Image from "next/image";
import { useEffect, useState } from "react";
import { database, ref, onValue } from '@/lib/firebase';
import dynamic from "next/dynamic";

const Header = dynamic(import('@/components/Header'))
const CommonTable = dynamic(import('@/components/CommonTable'))

interface CryptoData {
  icon: string;
  change: number;
  lastPrice: string;
  listType: string;
  pairs: string;
  tradeType: string;
}

const Dashboard: React.FC = () => {
  const [allList, setAllList] = useState<CryptoData[]>([]);
  const [activeList, setActiveList] = useState<CryptoData[]>([]);
  const [activeTab,setActiveTab] = useState('hot')
  const [loading,setLoading] = useState(true)

  // Fetch Hot List data
  useEffect(() => {
    const hotRef = ref(database, 'tradlist');
    onValue(hotRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setAllList(Object.values(data));
        console.log("dsf",data)
        setLoading(false)
      }
    });
  }, []);

   // Update activeList when allList or activeTab changes
  useEffect(() => {
    const filteredList = allList.filter(item => item.listType.toLowerCase() === activeTab);
    setActiveList(filteredList);
  }, [allList, activeTab]);



  return (
    <>
   
      <Header/>
      <div className="container">
        <h1 className="header">Catch Your Next Trading Opportunity</h1>

        <ul className="nav nav-tabs mb-3 bg-light ps-3 d-flex flex-row" id="cryptoTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
               onClick={()=>setActiveTab('hot')}
              className={`nav-link ${activeTab == 'hot' && 'active'}  nav-trading-tab`}
              id="hot-tab"
              data-bs-toggle="tab"
              data-bs-target="#hot"
              type="button"
              role="tab"
              aria-controls="hot"
              aria-selected="true"
            >
              HOT LIST
            </button>
          </li>
          <li className="nav-item " role="presentation">
            <button
            onClick={()=>setActiveTab('new')}
              className={`nav-link ${activeTab == 'new' && 'active'}  nav-trading-tab`}
              id="new-tab"
              data-bs-toggle="tab"
              data-bs-target="#new"
              type="button"
              role="tab"
              aria-controls="new"
              aria-selected="false"
            >
              NEW LIST
            </button>
          </li>
        </ul>

        <div className="tab-content" id="cryptoTabContent">
          {/* Hot List Tab */}
          <div
            className="tab-pane fade show active"
            id="hot"
            role="tabpanel"
            aria-labelledby="hot-tab"
          >
              <CommonTable activeList={activeList} loading={loading}/>
          </div>
          {/* New List Tab */}
          <div
            className="tab-pane fade"
            id="new"
            role="tabpanel"
            aria-labelledby="new-tab"
          >
            <CommonTable activeList={activeList} loading={loading}/>
          </div>
        </div>
      </div>

      {/* Bootstrap JS (loaded via next/script) */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        async
      />
    </>
  );
};

export default Dashboard;
