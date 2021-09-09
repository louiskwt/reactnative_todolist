import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy milk', key: '1' },
		{ text: 'do homework', key: '2' },
		{ text: 'reading', key: '3' }
	]);
	const pressHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.key != key);
		});
	};
	return (
		<View style={styles.container}>
			{/* Header */}
			<Header />
			<View style={styles.content}>
				{/* Todo Form */}
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => (
							<TodoItem item={item} pressHandler={pressHandler} />
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		padding: 40
	},
	list: {
		marginTop: 20
	}
});
