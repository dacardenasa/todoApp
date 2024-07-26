import React from 'react'
import { Container } from '../Container'
import { ActivityIndicator, StyleSheet } from 'react-native'

export const Loader = () => {
  return (
    <Container style={styles.container}>
        <ActivityIndicator size="large" color="#FFDB00" />
    </Container>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#AF47D2"
    }
});
