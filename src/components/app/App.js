import './App.css';
import { Component } from 'react';
import Section from 'components/section';
import FeedbackOptions from 'components/feedbackOptions';
import Statistics from 'components/statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e, option) => {
    const updatedState = {
      [option]: this.state[option] + 1,
    };

    this.setState(updatedState);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </>
    );
  }
}

export default App;
