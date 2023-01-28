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
    hChange = (value) => {
        console.log(value);
      }

      vChange = (value) => {
        console.log(value);
      }

    public render() {
        return (
            <main>
                
           <div style={rowC}>
           <Slider vertical={true} style={verticalstyle} onChange={this.vChange} />
           <div>
                <BezierCurveEditor
                    size={1200} leftHandlePosition={1}
                />
                <Slider style={horizontalstyle}  onChange={this.hChange} />
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