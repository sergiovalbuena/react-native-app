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
        fetch("https://fakerapi.it/api/v1/persons")
        .then(response => response.json())
        .then(response => {
            console.log(response.data[0].firstname);
            this.setState({
                photo: response.data[0].image
            });

            this.props.updateName(response.data[0].firstname);
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