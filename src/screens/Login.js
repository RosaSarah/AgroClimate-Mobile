import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'

export function Login({ navigation }) {
    return (
        <View style={styles.login}>
            <Image
                // Local da imagem
                source={logoAgroclimate}
                // Definindo a largura e altura da imagem
                style={{ width: 129, height: 129 }}
                // Pra nao cortar a imagem
                resizeMode="contain"
            />
            <Text style={styles.titulo}>Bem-Vindo!</Text>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text>Ainda não tem uma conta? Crie agora</Text>
            </TouchableOpacity>
            <Button onPress={() => navigation.navigate('Home')}>
                Entrar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Ocupa o espaço todo da
        flex: 1,
        // Espaço interno
        padding: 24,
        justifyContent: "center",
        // Espaçamento entre itens
        gap: 24,

        // Alinhar ao centro
        alignItems: 'center', 
        justifyContent: 'center'
    },
    titulo: {
        // Tamanho do texto
        fontSize: 24,
        // Espessura do texto (negrito)
        fontWeight: "600"
    }
})