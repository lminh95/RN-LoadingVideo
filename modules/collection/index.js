import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBar } from '../../components/HeaderBar'; 
import { FlatListItem } from '../../components/FlatListItem';
import { NavigationActions } from 'react-navigation';
import { fetchData, fetchNextPage, keywordChange } from './actions';
import { Textbox } from '../../components/Textbox'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
class Collection extends React.Component{
    static navigationOptions = (navigation) => ({
        header: <HeaderBar headerTitle='Collection' onMenuButtonPress={() => navigation.navigation.navigate('DrawerOpen')} />
    });

    componentWillMount(){
        this.props.fetchData('');
    }

    _NextPage(nextPageToken){
        this.props.fetchNextPage(this.props.keyword, nextPageToken)
    }

    _onSubmit(){
        this.props.fetchData(this.props.keyword)
    }
    _renderBody(){
        if(this.props.isLoading)
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            )
        return (
            <View style={{ flex: 1 }}>
                <FlatList data={this.props.result.items}
                            renderItem={({item}) => <FlatListItem item={item} onItemPress={() => {console.log(item.id.videoId)
                                this.props.navigation.navigate('VideoDetail', { videoID: item.id.videoId })}} />}
                            keyExtractor={(item, index) => index}
                />
                <TouchableOpacity style={{ backgroundColor: 'rgba(112, 48, 209, 1)', height: 35, justifyContent: 'center', alignItems: 'center' }} onPress={this._NextPage.bind(this, this.props.result.nextPageToken)}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Next</Text>
                </TouchableOpacity>
            </View>
        ) 
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <View style={{ justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(112, 48, 209, 1)'}}>
                    <View style={styles.container}>
                        <Icon name='search' color='#fff' size={20} />
                        <TextInput  style={styles.inputStyle}
                                    autoCorrect = {false}
                                    onChangeText = { () => {} } 
                                    placeholder = 'Search here ...'
                                    placeholderTextColor = '#fff'
                                    returnKeyType = 'go'
                                    blurOnSubmit = {true}
                                    onSubmitEditing={this._onSubmit.bind(this)}
                                    onChangeText = {(text) => this.props.keywordChange(text)}
                        />
                    </View>
                </View>  
                {this._renderBody()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.collectionState.videos);
    return {
        keyword: state.collectionState.keyword,
        result: state.collectionState.videos,
        isLoading: state.collectionState.isLoading,
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 35,
        width: width - 10,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        // borderColor: 'rgba(125, 66, 244, 1)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        marginLeft: 5
    },
    inputStyle: {
        flex: 0.9,
        // backgroundColor: 'red',
        color: '#fff',
        fontSize: 15,
        marginLeft: 10
    },
    buttonStyles: {
        
    }
})

export default connect(mapStateToProps, { fetchData, fetchNextPage, keywordChange })(Collection) 