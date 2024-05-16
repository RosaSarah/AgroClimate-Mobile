import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'

export function Senha({ navigation }) {
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
            <Input placeholder="Senha" />
            <Input placeholder="Confirme sua senha" />

            <View style={styles.instrucoes}> 
                <Text>Crie sua senha, deve conter:</Text>
                <Text>*No minimo 8 digitos;</Text>
                <Text>*Uma letra maiuscula;</Text>
                <Text>*Uma letra minuscula;"</Text>
            </View>

            <Button onPress={() => navigation.navigate('Home')}>Enviar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Espaço interno
        padding: 24,
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
    },
    instrucoes:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:'#595656',
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 15,
        gap: 3,
        marginRight: 'auto'


    }
})