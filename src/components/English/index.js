import Choose from '../Choose';
import Input from '../Input';
import style from './style.module.css';

function English({ arrayToMap, numClickNext, data = () => {} }) {
  const topics = ['השלמת משפטים', 'ניסוח מחדש', 'קטע קריאה 1 ', 'קטע קריאה 2 '];
  const causingDifficulty = ['אוצר מילים', 'אין תחיליות וסופיות', 'אחר'];
  const lesson = ['אוצר מילים', 'שיטת עבודה'];

  return (
    <tbody>
      {arrayToMap.map((number, index) => (
        <tr key={index} className={style.row}>
          <td>
            <input
              className={style.inputnone}
              type="number"
              value={number}
              onChange={() => {}}
              {...data(number)}
            />
          </td>
          <td className={style.row}>
            <Choose
              className={style.firstChoice}
              array={topics}
              data={data}
              placeholder={'נושא'}
            />
          </td>
          <td>
            {' '}
            <Choose
              array={causingDifficulty}
              className={style.firstChoice}
              data={data}
              placeholder={'גורם קושי'}
            />
          </td>
          {numClickNext !== 0 && numClickNext % 2 === 1 && (
            <>
              <td>
                <Input
                  type="Text"
                  placeholder={'הסיבה לטעות'}
                  className={style.input}
                  data={data}
                />
              </td>
            </>
          )}
          <td>
            {' '}
            <Choose
              array={lesson}
              data={data}
              choice=""
              placeholder={'סוג לקח'}
            />
          </td>
          <td>
            <Input
              type="Text"
              placeholder={'לקח יישומי'}
              className={style.input}
              data={data}
            />
          </td>
          <td>
            <Input
              type="Text"
              placeholder={'מילה חדשה'}
              className={style.input}
              data={data}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default English;
