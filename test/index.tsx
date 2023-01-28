import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BezierCurveEditor } from '../lib';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'

const verticalstyle = { height: 600};
const rowC ={"display":"flex", "flexDirection":"row"};

interface IState {

}

class App extends React.Component<{}, IState> {
    public state = {

    }
  

      lPosition = 0;
      hPosition = 0;
      vChange = (value) => {
        if (value < 3) value = 0; // THIS IS A HACK, this hack is to ensure that when the min value is low, it snaps to zero, for some reason the slider likes to stay between 1 and 3 even when you slide to the max
      this.setState({lPosition: value/100});
        this.lPosition = (value/100);
      }
      hChange = (value) => {
        if (value < 3) value = 0; // THIS IS A HACK, this hack is to ensure that when the min value is low, it snaps to zero, for some reason the slider likes to stay between 1 and 3 even when you slide to the max
        this.setState({hPosition: value/100});
          this.hPosition = (value/100);
        }
      

    public render() {
        return (
            <main>
                
           <div style={rowC}>
           <Slider vertical={true} style={verticalstyle} onChange={this.vChange} />
           <div>
                <BezierCurveEditor
                    size={1200} fixedHandlePosition={[this.lPosition,this.hPosition]}   />
                 <Slider vertical={false} reverse={true} style={verticalstyle} onChange={this.hChange} />
                </div>
                </div>
            </main>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);