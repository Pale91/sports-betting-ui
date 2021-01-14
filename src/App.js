import './App.css';
import { connect } from 'react-redux';

function AppUI(props, {context}) {
  return (
    <div>
      <p>App</p>
      <ul>
        {props.events.map(e =>
          <li>{e.name}</li>
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
    events: state.events
})

const mapDispatchToProps = () => ({
})

const App = connect(mapStateToProps, mapDispatchToProps)(AppUI);

export default App;
