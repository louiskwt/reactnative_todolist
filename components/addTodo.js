import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
	const [text, setText] = useState('');

	const changeHandler = (val) => {
		setText(val);
	};

	const pressHandler = () => {
		submitHandler(text);
		setText('');
	};

	return (
		<View>
			<TextInput
				placeholder='New Todo'
				onChangeText={changeHandler} // val automatically passed in
				style={styles.input}
				defaultValue={text}
			/>
			<Button onPress={pressHandler} title='Add todo' color='coral' />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd'
	}
});
