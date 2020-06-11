import React, { Component } from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'

import Header from '../components/Header'
import Search from '../components/Search'
import ActivityList from '../components/ActivityList'
import Footer from '../components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      isLoading: true,
      activities: [
        {
          id: 1,
          title: "Ballet (05 a 07 anos)",
          time: "09h às 10h",
          project: "Ritmo Livre",
          address: "Clube VW",
          instructor: "Mariana"
        },
        {
          id: 2,
          title: "Ballet (05 a 07 anos)",
          time: "09h às 10h",
          project: "Ritmo Livre",
          address: "Clube VW",
          instructor: "Mariana"
        },
        {
          id: 3,
          title: "Ballet (05 a 07 anos)",
          time: "09h às 10h",
          project: "Ritmo Livre",
          address: "Clube VW",
          instructor: "Mariana"
        },
        {
          id: 4,
          title: "Ballet (05 a 07 anos)",
          time: "09h às 10h",
          project: "Ritmo Livre",
          address: "Clube VW",
          instructor: "Mariana"
        },
        {
          id: 5,
          title: "Ballet (05 a 07 anos)",
          time: "09h às 10h",
          project: "Ritmo Livre",
          address: "Clube VW",
          instructor: "Mariana"
        }
      ]
    }
  }

  componentDidMount = () => {
    //data will be fetched here
  }

  onSearchTextChange = searchText => {
    this.setState({ searchText })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
  
        <Search placeholder="Como quer se movimentar?" 
         value={this.state.searchText}
         onChange={this.onSearchTextChange} />

         <ActivityList activities={this.state.activities} isLoading={this.state.isLoading} />

         <Footer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  }
})