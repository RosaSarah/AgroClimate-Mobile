import { StyleSheet, Text,View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { OptionButton } from "../components/OptionButton";

export function Home({navigation}) {
    return (
        <View style={styles.login}>

            <Text style={styles.titulo}>O que deseja fazer?</Text>


            <Button onPress={() => navigation.navigate('Cadastrar Safra')}>
                    Cadastrar Safra
                </Button>  

            <Button onPress={() => navigation.navigate('Visualizar Safra')}>
                    Visualizar Safra
                </Button>


            <Button onPress={() => navigation.navigate('AtualizarSafra')}>
                    Atualizar Safra
                </Button>


           
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
    }
})