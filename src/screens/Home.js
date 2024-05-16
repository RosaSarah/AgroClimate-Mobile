import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'
import { Login } from "./Login";
import { OptionButton } from "../components/OptionButton";

export function Home() {
    return (
        <View style={styles.login}>
            <OptionButton title='jijinun'>
                njbj
            </OptionButton>

        </View>
    )
}

const styles = StyleSheet.create({
    Login: {
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