import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'

export function VisualizarSafra() {
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
            <Text style={styles.titulo}>Informe a safra que deseja vizualizar:</Text>
            <Input placeholder="Id Safra:" />
            
            <Button>Vizualizar</Button>
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
        fontSize: 18,
        // Espessura do texto (negrito)
        fontWeight: "600"
    }
})