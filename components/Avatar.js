import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{
        name: state.name
    };
}

function mapDispatchToProps(dispatch){
    return{
        updateName: name => dispatch({
            type: "UPDATE_NAME",
            name: name
        })
    };
}

class Avatar extends React.Component {
    state = {
    photo: "https://share.getcloudapp.com/mXurlKZ4"
    };

    componentDidMount(){
        fetch("https://uifaces.co/api", {headers: new Headers({
            "X-API-KEY": " 56B5BC4D-8E2F435E-A3277D41-2130D273"
        })})
        .then(response => response.json())
        .then(response => {
            console.log(response[0].name);
            this.setState({
                photo: response[0].photo
            });

            this.props.updateName(response[0].name);
        });
    }

    render() {
        return <Image source={{ uri: this.state.photo}} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Avatar);

const Image = styled.Image `
    width: 44px;
    height: 44px;
    border-radius:22px;
`;