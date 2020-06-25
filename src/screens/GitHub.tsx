import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

interface User {
    login: string;
    location: string;
    name: string;
    avatar_url: string;
    bio: string;
    followers: string;
}

const GitHub = ({ route }: { route: any }) => {
    const [user, setUser] = useState<User | null>(null);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        async function getGitHubUser() {
            const res = await fetch(`https://api.github.com/users/${search}`);
            setUser(await res.json())
        }
        getGitHubUser();
    }, [search])

    return <View style={{
        alignItems: "center",
        justifyContent: "center"
    }}>
        <View>
            <TextInput
                value={search}
                onChangeText={(value) => setSearch(value)}
                editable
            />
        </View>
        {user ?
            <View style={styles.userContainer}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userLogin}>{user.login}</Text>
                <Text>Seguidores: {user.followers}</Text>
            </View> : <View>
                <Text>
                    Nenhum usuário escolhido
                </Text>
            </View>
        }
    </View>
}

const styles = StyleSheet.create({
    userContainer: {
        paddingTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    userName: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center'
    },
    userLogin: {
        color: "grey",
        fontSize: 20
    }
})

export default GitHub;