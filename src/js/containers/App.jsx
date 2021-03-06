import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SCROLL_THRESHOLD = 200;

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ]),
        params: React.PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = { isNavbarOpaque: false };
        this.state = { isAnimationEnabled: false };
        setTimeout(() => { this.state = { isAnimationEnabled: true }; }, 200);
    }
    componentDidMount() {
        document.addEventListener("scroll", this.scrollHandler, false);
    }
    componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollHandler, false);
    }
    render() {
        return (
            <div className="site">
                <Navbar className={
                        (this.state.isAnimationEnabled ? "" : "preload ") +
                        (this.shouldNavbarBeOpaque() ? "navbar-opaque" : "")
                    } />
                <main className="site-content">
                    { this.props.children }
                </main>
                <Footer />
            </div>
        );
    }
    scrollHandler = () => {
        const scrollTop = document.documentElement.scrollTop
            || document.body.scrollTop;
        if (scrollTop >= SCROLL_THRESHOLD && !this.state.isNavbarOpaque) {
            this.setState({ isNavbarOpaque: true });
        } else if (scrollTop < SCROLL_THRESHOLD && this.state.isNavbarOpaque) {
            this.setState({ isNavbarOpaque: false });
        }
    };
    shouldNavbarBeOpaque = () => {
        return this.state.isNavbarOpaque
            && !Object.keys(this.props.params).length;
    }
}

export default App;
