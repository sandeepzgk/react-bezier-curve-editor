import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BezierCurveEditor } from '../lib';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css'

const verticalstyle = { height: 600};
const horizontalstyle = { width: 600};
const rowC ={"display":"flex", "flexDirection":"row"};

interface IState {

}

class App extends React.Component<{}, IState> {
    public state = {

    }
  

      lPosition = 0;
      vChange = (value) => {
      this.setState({lPosition: value/100});
        this.lPosition = (value/100);
       // console.log(this.lPosition);
      }

    public render() {
        return (
            <main>
                
           <div style={rowC}>
           <Slider vertical={true} style={verticalstyle} onChange={this.vChange} />
           <div>
                <BezierCurveEditor
                    size={1200} fixedHandlePosition={[this.lPosition,0]}   />
                
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