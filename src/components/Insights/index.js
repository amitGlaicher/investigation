import React, { useContext } from "react";
import style from "./style.module.css";
import { userContext } from "../LayOut";

function Insights() {
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div className={style.vocabulary}>
      {user.test.map((test) => {
        return (
          <div>
            <div>{test.simulationName}</div>
            {test.insights.map((chapter, index) => {
              if (index === 0) {
                return (
                  <div>
                    <h6>כמותי</h6>
                    {chapter.map((ins) => (
                      <div>
                        <label>{ins.topic}</label>
                        <label>{ins.subtopic}</label>
                        <label>{ins.ins}</label>
                      </div>
                    ))}
                  </div>
                );
              } else if (index === 1) {
                return (
                  <div>
                    <h6>מילולי</h6>
                    {chapter.map((ins) => (
                      <div>
                        <label>{ins.topic}</label>
                        <label>{ins.subtopic}</label>
                        <label>{ins.ins}</label>
                      </div>
                    ))}
                  </div>
                );
              } else if (index === 2) {
                return (
                  <div>
                    <h6>אנגלית</h6>
                    {chapter.map((ins) => (
                      <div>
                        <label>{ins.topic}</label>
                        <label>{ins.subtopic}</label>
                        <label>{ins.ins}</label>
                      </div>
                    ))}
                  </div>
                );
              }
              return false;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Insights;
