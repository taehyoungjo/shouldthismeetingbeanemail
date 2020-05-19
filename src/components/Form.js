import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      tab: 1,
    };
  }

  render() {
    const { tab } = this.state;

    let contents;
    switch (tab) {
      case 1:
        contents = (
          <div className="vertical-center">
            <h1 className="display-4">Should this meeting be an email?</h1>

            <button
              onClick={() => this.setState({ tab: 2 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Start
            </button>
            <a href="https://hbr.org/2015/03/do-you-really-need-to-hold-that-meeting">
              Source: HBR - Do you really need to hold that meeting?
            </a>
          </div>
        );
        break;
      case 2:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 1 })}
              type="button"
              className="btn btn-outline-secondary btn-sm"
            >
              Back
            </button> */}
            <p className="lead">Have I thought through this situation?</p>
            <p>
              When you don’t have clarity about what you’re doing on a project,
              <mark>
                it’s tempting to schedule a meeting to give you the feeling of
                progress
              </mark>
              . But unless the meeting’s intent is to structure the project, at
              this point, scheduling a meeting is an inefficient use of your
              time — and your colleagues’. Instead, set aside some time with
              yourself to do some strategic thinking. During that time you can
              evaluate{" "}
              <mark>
                the scope of the project, the current status, the potential
                milestones, and lay out a plan of action
              </mark>{" "}
              for making meaningful progress. Once you’ve completed your own
              strategic thinking prep work, then you can move onto the next step
              of considering whether to hold a meeting.
            </p>
            <button
              onClick={() => this.setState({ tab: 3 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Yes
            </button>
            <button
              onClick={() => this.setState({ tab: 7 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              No
            </button>
          </div>
        );
        break;
      case 3:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 2 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">Do I need outside input to make progress?</p>
            <p>
              You may be in the situation where{" "}
              <mark>
                you know what needs to be done, and you simply need to do the
                work
              </mark>
              . If you find yourself in this place, don’t schedule a meeting;
              update your to-do list and take action instead. However, if after
              clarifying what needs to be done to the best of your ability, you
              need outside input to answer questions or give feedback before you
              feel comfortable jumping into action, continue on.
            </p>
            <button
              onClick={() => this.setState({ tab: 4 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Yes
            </button>
            <button
              onClick={() => this.setState({ tab: 8 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              No
            </button>
          </div>
        );
        break;
      case 4:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 3 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              Does moving forward require a real-time conversation?
            </p>
            <p>
              If you need some answers to questions, but they don’t require a
              two-way conversation, e-mail can be an excellent option in lieu of
              a meeting. This is particularly true when you’re looking for
              <mark>feedback on your written plans or documents</mark>. It’s
              much more efficient for everyone involved if you send over items
              that they can look at on their own (while you’re not awkwardly
              watching them read during an in-person meeting) and then shoot you
              back feedback. If you feel your situation does require a real-time
              conversation, then examine different communication channels.
            </p>
            <button
              onClick={() => this.setState({ tab: 5 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Yes
            </button>
            <button
              onClick={() => this.setState({ tab: 9 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              No
            </button>
          </div>
        );
        break;
      case 5:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 4 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              Does this necessitate a face-to-face meeting?{" "}
            </p>
            <button
              onClick={() => this.setState({ tab: 6 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Yes
            </button>
            <button
              onClick={() => this.setState({ tab: 10 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              No
            </button>
          </div>
        );
        break;
      case 6:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 5 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              <a href="https://www.when2meet.com/">Schedule</a> and prepare for
              the meeting
            </p>
          </div>
        );
        break;
      case 7:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 2 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              <a href="https://calendar.google.com/">Schedule time</a> for doing
              the work
            </p>
            {/* <img
              src={require("../assets/calendar.png")}
              className="img-fluid"
              alt="Responsive image"
            /> */}
          </div>
        );
        break;
      case 8:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 3 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              <a href="https://calendar.google.com/">Schedule time</a> for doing
              the work
            </p>
          </div>
        );
        break;
      case 9:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 4 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              Send an <a href="mailto:">email</a>
            </p>
          </div>
        );
        break;
      case 10:
        contents = (
          <div className="vertical-center">
            {/* <button
              onClick={() => this.setState({ tab: 5 })}
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
            >
              Back
            </button> */}
            <p className="lead">
              Use chat, call, or{" "}
              <a href="https://www.when2meet.com/">
                schedule a video conference
              </a>
            </p>
          </div>
        );
        break;
      default:
        break;
    }

    return <div className="container">{contents}</div>;
  }
}

export default Form;
