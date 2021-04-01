import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from '../../components/home/Header';
import Banner from '../../components/home/Banner';
import Page1 from '../../components/home/Page1';
import Page2 from '../../components/home/Page2';
import Page3 from '../../components/home/Page3';
import Footer from '../../components/home/Footer';
import '../../components/home/style';

let isMobile = false;
enquireScreen((b) => {
    isMobile = b;
});

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
        };
    }
    componentDidMount() {
        enquireScreen((b) => {
            this.setState({
                isMobile: !!b,
            });
        });
    }
    render() {
        return (
            <div className="page-wrapper home">
                <Header />
                <Banner isMobile={this.state.isMobile} />
                <Page1 isMobile={this.state.isMobile} />
                <Page2 isMobile={this.state.isMobile} />
                <Page3 />
                <Footer />
                <DocumentTitle title="Ant-Design" key="title" />
            </div>
        );
    }
}
export default HomePage;