import { useState } from 'react';
import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export function App() {
  const [goodFeedbacks, setGoodFeedbacks] = useState(0);
  const [neutralFeedbacks, setNeutralFeedbacks] = useState(0);
  const [badFeedbacks, setBadFeedbacks] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const totalFeedbacksCount = goodFeedbacks + neutralFeedbacks + badFeedbacks;

  function onLeaveFeedback(variant) {
    switch (variant) {
      case 'good':
        setGoodFeedbacks(state => state + 1);
        break;
      case 'neutral':
        setNeutralFeedbacks(state => state + 1);
        break;
      case 'bad':
        setBadFeedbacks(state => state + 1);
        break;
      default:
        break;
    }
  }

  function countPositiveFeedbackPercentage() {
    let res = (goodFeedbacks * 100) / totalFeedbacksCount;
    return res > 0 ? Math.round(res) : 0;
  }

  return (
    <div>
      <Section title="PLEASE LEAVE FEEDBACK">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="STATISTICS">
        {totalFeedbacksCount > 0 ? (
          <Statistics
            good={goodFeedbacks}
            neutral={neutralFeedbacks}
            bad={badFeedbacks}
            total={totalFeedbacksCount}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = variant => {
//     this.setState(prevState => ({
//       [variant]: prevState[variant] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     let res = (this.state.good * 100) / this.countTotalFeedback();
//     return res > 0 ? Math.round(res) : 0;
//   };

//   render() {
//     const options = Object.keys(this.state);

//     return (
//       <div>
//         <Section title="PLEASE LEAVE FEEDBACK">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="STATISTICS">
//           {this.state.good > 0 ||
//           this.state.neutral > 0 ||
//           this.state.bad > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
