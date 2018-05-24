import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window')

export default class mainScene extends Component {

  constructor(){
    super();
      this.state ={statusExperience:false}
      this.state ={statusContact:false}
      this.state ={statusProgramming:true}
  }

    onProgrammingPress() {
      this.setState({statusProgramming: true})
      this.setState({statusExperience: false})
      this.setState({statusContact: false})

    }

    onExperiencePress() {
      this.setState({statusProgramming: false})
      this.setState({statusExperience: true})
      this.setState({statusContact: false})
    }

    onContactPress() {
        this.setState({statusProgramming: false})
        this.setState({statusExperience: false})
        this.setState({statusContact: true})

    }

    header(){
        return(
            <View style={styles.header}>
                <Text style={{fontSize: 28, textAlign: 'center', color: 'blue'}}>Jamie Murphy</Text>
            </View>
        );
    }

    descriptionProgramming() {
        return(
          <View style={styles.description}>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>C++</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>Ive developed a 2D auto scrolling game as part of my third year project.</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>C#</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>Ive made 2D puzzle games.</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Javascript</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>This is programmed in Javascript.</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Java</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>Ive used Java for mobile applications</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Python</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>Ive made a word game website.</Text>
              </View>

          </View>
        );
    }

    descriptionExperience() {
        return(
          <View style={styles.description}>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Presently - The Hatch Labs</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>I will have worked in an innovative tech incubator space, called the Hatch Lab for a 6 month period as part of my college course.</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Presently - IT Carlow</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>I am currently attending my third year of a four year course in Computer Games Design and Development at Institute of Technology Carlow.</Text>
              </View>
          </View>
        );
    }

    descriptionContact() {
        return(
          <View style={styles.description}>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionHeading}>Email</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={styles.descriptionText}>c00208743@itcarlow.ie</Text>
              </View>
              <View style={{flexDirection:'column'}}>
                  <Text style={{fontSize: 10, textAlign: 'center', color: 'red', paddingTop: 300}}>Dont forget to look for me on LinkedIn</Text>
              </View>
          </View>
        );
    }

    buttonGroup(){
        return(
            <View style={styles.buttonGroup}>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.3)' style={styles.button} onPress={() => this.onProgrammingPress()}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>programming</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button} onPress={() => this.onExperiencePress()}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>experience</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.6} underlayColor='rgba(0,0,0,0.001)' style={styles.button} onPress={() => this.onContactPress()}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.buttonText}>contact</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={ styles.container }>
                <StatusBar backgroundColor="white" barStyle="default" />
                {this.header()}
                {this.buttonGroup()}

                {
                  this.state.statusProgramming ? this.descriptionProgramming() : null
                }
                {
                  this.state.statusExperience ? this.descriptionExperience() : null
                }
                {
                  this.state.statusContact ? this.descriptionContact() : null
                }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
    },
    header:{
        flex: 1,
        justifyContent: 'center',
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'white',
        height: 10,
        alignItems:'center',
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
    },
    description:{
        width:width,
        height: height*0.75,
        paddingLeft: 20,

    },
    descriptionText:{
      fontSize: 20,
      fontWeight: '200',
      fontFamily: 'Arial Rounded MT Bold',
      textAlign: 'left',
      color: 'black',
    },
    descriptionHeading:{
      fontSize: 30,
      fontWeight: '200',
      textAlign: 'left',
      color: 'green',
      marginTop: 10,
    },
    button:{
        padding:10,
        alignItems:'center',
        borderBottomWidth: 5,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'lightgrey',
        borderBottomColor: 'blue',
        width: 125, //should try make these scalable <--
        height:50,

    },
    buttonText:{
        fontSize: 16,
        fontWeight: '200',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        color: 'black',
    },
    buttonGroup:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
});
