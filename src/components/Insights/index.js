// import React, { useContext, useState } from "react";
// import style from "./style.module.css";
// import { userContext } from "../LayOut";
// import Button from "../Button";
// import ConclusionGraph from "../ConclusionGraph";
// import { useNavigate } from "react-router-dom";

// function Insights() {
//   const { user } = useContext(userContext);
//   const [selectedTestIndex, setSelectedTestIndex] = useState(null);
//   const navigate = useNavigate();

//   const onClick = (testIndex) => {
//     if (selectedTestIndex === testIndex) {
//       setSelectedTestIndex(null);
//     } else {
//       setSelectedTestIndex(testIndex);
//     }
//   };

//   const goToTestInvestigation = (testIndex) => {
//     navigate("../nextPage");
//   }

//   return (
//     <div className={style.insightsContainer}>
//       <h2 className={style.title}>רשימת מבחנים</h2>
//       {user.test.map((test, index) => {
//         return (
//           <div key={index} className={style.insights} onClick={() => onClick(index)} >
//             {test.simulationName}
//             {selectedTestIndex === index && (
//               <table className={style.table}>
//                 <thead>
//                   <tr>
//                     <th>נושא</th>
//                     <th>תת-נושא</th>
//                     <th>לקח</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td colSpan="3">
//                       <h6>כמותי</h6>
//                     </td>
//                   </tr>
//                   {test.insights[0].map((ins, insIndex) => (
//                     <tr key={insIndex}>
//                       <td>{ins.topic}</td>
//                       <td>{ins.subtopic}</td>
//                       <td>{ins.ins}</td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td colSpan="3">
//                       <h6>מילולי</h6>
//                     </td>
//                   </tr>
//                   {test.insights[1].map((ins, insIndex) => (
//                     <tr key={insIndex}>
//                       <td>{ins.topic}</td>
//                       <td>{ins.subtopic}</td>
//                       <td>{ins.ins}</td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td colSpan="3">
//                       <h6>אנגלית</h6>
//                     </td>
//                   </tr>
//                   {test.insights[2].map((ins, insIndex) => (
//                     <tr key={insIndex}>
//                       <td>{ins.topic}</td>
//                       <td>{ins.subtopic}</td>
//                       <td>{ins.ins}</td>
//                     </tr>
//                   ))}
//                   <Button onClick={goToTestInvestigation}/>
//                 </tbody>
//               </table>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Insights;


import React, { useContext, useState } from "react";
import style from "./style.module.css";
import { userContext } from "../LayOut";
import Button from "../Button";
import ConclusionGraph from "../ConclusionGraph";
import { useNavigate } from "react-router-dom";

function Insights() {
  const { user } = useContext(userContext);
  const [selectedTestIndex, setSelectedTestIndex] = useState(null);
  const navigate = useNavigate();

  const onClick = (testIndex) => {
    if (selectedTestIndex === testIndex) {
      setSelectedTestIndex(null);
    } else {
      setSelectedTestIndex(testIndex);
    }
  };

  const goToTestInvestigation = (testIndex) => {
    navigate("../nextPage");
  };

  return (
    <div className={style.insightsContainer}>
      <h2 className={style.title}>רשימת מבחנים</h2>
      {user.test.map((test, index) => {
        return (
          <div key={index} className={style.testContainer}>
            <div className={style.insights} onClick={() => onClick(index)}>
              {test.simulationName}
            </div>
            {selectedTestIndex === index && (
              <div className={style.tableContainer}>
                <table className={style.table}>
                  <thead className={style.thead}>
                    <tr>
                      <th>נושא</th>
                      <th>תת-נושא</th>
                      <th>לקח</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={style.tr_cell} >
                      <td colSpan="3">
                        <h6>כמותי</h6>
                      </td>
                    </tr>
                    {test.insights[0].map((ins, insIndex) => (
                      <tr key={insIndex}>
                        <td className={style.topic}>{ins.topic}</td>
                        <td className={style.topic}>{ins.subtopic}</td>
                        <td>{ins.ins}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3">
                        <h6>מילולי</h6>
                      </td>
                    </tr>
                    {test.insights[1].map((ins, insIndex) => (
                      <tr key={insIndex}>
                        <td className={style.topic}>{ins.topic}</td>
                        <td className={style.topic}>{ins.subtopic}</td>
                        <td>{ins.ins}</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3">
                        <h6>אנגלית</h6>
                      </td>
                    </tr>
                    {test.insights[2].map((ins, insIndex) => (
                      <tr key={insIndex}>
                        <td className={style.topic}>{ins.topic}</td>
                        <td className={style.topic}>{ins.subtopic}</td>
                        <td>{ins.ins}</td>
                      </tr>
                    ))}
                    <Button className={style.button} text={"לתחקור המלא"} onClick={goToTestInvestigation} />
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Insights;
