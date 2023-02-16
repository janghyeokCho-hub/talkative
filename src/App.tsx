import { Suspense, Component } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Main } from "@/route/main/index.async";
import { popLayer } from "@/modules/mainlayer";

const TITLE = APP_VERSION;

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    // Perform actions before the component is mounted
  }

  render() {
    return (
      <>
        <title>Talkative - v{TITLE}</title>
        {(navigator.onLine && (
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                  <Route path="/client" element={<Main />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        )) || <></>}
      </>
    );
  }
}

const appModule = () => {
  return connect(
    ({ mainlayer }) => ({
      layer: mainlayer.layer,
    }),
    (dispatch) => ({
      popLayer: () => dispatch(popLayer()),
    })
  )(App);
};

export default appModule();
