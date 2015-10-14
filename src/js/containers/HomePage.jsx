import React from "react";

class HomePage extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
                React.PropTypes.arrayOf(React.PropTypes.node),
                React.PropTypes.node
            ])
    };

    render() {
        return (
            <div className="page page-home">
                <section className="home-cover">
                    <div className="home-cover-content">
                    </div>
                </section>
            </div>
        );
    }
}

export default HomePage;
