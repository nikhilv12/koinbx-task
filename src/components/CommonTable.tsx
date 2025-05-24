import React from "react";

interface ListItem {
  icon: string;
  change: number;
  lastPrice: string;
  listType: string;
  pairs: string;
  tradeType: string;
}

// Define the props interface for the CommonTable component
interface CommonTableProps {
  activeList: ListItem[] ; // Allow undefined to handle cases where prop might not be passed
  loading: boolean ; // Allow undefined to handle cases where prop might not be passed
}

const CommonTable: React.FC<CommonTableProps> = ({ activeList,loading }) => {
  return (
    <div className="table-container">
      <table className="table table-hover">
        <thead className="p-2">
          <tr>
            <th className="text-secondary fs-6">Trending Pairs</th>
            <th className="text-secondary fs-6">Last Price</th>
            <th className="text-secondary fs-6">24hr change</th>
            <th className="text-secondary fs-6">Trade</th>
          </tr>
        </thead>
        <tbody className="p-2">
          {activeList.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.icon} alt={item.pairs} className="pair-icon" />
                {item.pairs}
              </td>
              <td>₹{item.lastPrice.toLocaleString()}</td>
              <td className={item.change < 0 ? "negative" : "positive"}>
                {item.change}%
              </td>
              <td>
                <button className="trade-btn">{item?.tradeType}</button>
              </td>
            </tr>
          ))}
          {loading && <>
             <tr >
              <td className="text-center" colSpan={4}>
                Loading...
              </td>
            </tr>
          </>}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
