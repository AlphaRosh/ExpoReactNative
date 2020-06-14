import React, { useReducer } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import * as firebase from 'firebase'

const reducer = (state, action) => {
    //action (type,payload) 
    //type: email_Changed,password_Changed,userLogin_Success,userLogin_failure
    switch (action.type) {
        case 'email_Changed':

            return {
                ...state,
                email: action.payload
            }
        case 'password_Changed':
            return {
                ...state,
                password: action.payload

            }
        case 'userSignUp_Success':
            return {
                ...state,
                ...INITIAL_STATE,
                IsSuccess: action.payload,
                errorMessage: ""


            }
        case 'userSignUp_Failure':
            console.log(action.payload)
            return {
                ...state,
                ...INITIAL_STATE,
                errorMessage: action.payload,
                IsSuccess: false
            }
        default:
            return state

    }
}
const INITIAL_STATE = { email: "", password: "", errorMessage: "", user: null, IsSuccess: false }

const RegisterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const onChangeText = (event, type) => {
        const { text } = event.nativeEvent;
        dispatch({ type: type, payload: text });
    }

    const { email, password, errorMessage, user, IsSuccess } = state;

    const handleSignUp = (email, password) => {
        console.log(`${email} ,${password}`)
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: 'userSignUp_Success', payload: true });

            })
            .catch((error) => {

                dispatch({ type: 'userSignUp_Failure', payload: error.message });
            })
    }
    const renderArea = () => {
        return (
            <View>
                <Text style={styles.success}>User Created Successfully</Text>
                <Button title='Go Back To Login' onPress={() => props.navigation.navigate('Login')}></Button>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>{`Thanks For Choosing \nPlease Provide Details for SignUp`}</Text>

            <View style={styles.Message}>
                <Text style={styles.error}>{errorMessage}</Text>
                {IsSuccess ? renderArea() : null}

            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        placeholder='abc@test.com'
                        onChange={(event) => { onChangeText(event, 'email_Changed'); }}
                        value={email}
                    >
                    </TextInput>

                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder='password'
                        onChange={(event) => { onChangeText(event, 'password_Changed'); }}
                        value={password}
                    ></TextInput>


                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { handleSignUp(email, password); }}
                >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '300' }}>Create User</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 15 }}
                    onPress={() => props.navigation.navigate('Register')}>
                    <Text style={{ color: 'gray', fontSize: 15 }}>
                        New To Here? <Text style={{ color: "#1034A6", fontWeight: '500' }}>Sign Up</Text>
                    </Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    greeting: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',

    },
    Message: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    },
    error: {
        color: 'red',
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    success: {
        color: 'red',
        fontSize: 15,
        fontWeight: '400',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    form: {
        marginBottom: 50,
        marginHorizontal: 40
    },
    inputTitle: {
        color: "black",
        fontSize: 12,
        textTransform: 'uppercase'

    },
    input: {
        borderBottomColor: "#818F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F30",
        backgroundColor: "#DDDEE0",
        paddingLeft: 5
    },
    button: {
        height: 40,
        borderRadius: 5,
        borderColor: '#000080',
        backgroundColor: "#1034A6",
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center'

    }


})