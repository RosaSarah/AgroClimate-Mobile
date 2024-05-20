import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'
import { api } from "../services/api";
import { useState } from "react";
import dayjs from "dayjs";

export function VisualizarSafra({navigation}) {
    const [ idSafra, setIdSafra] = useState('')
    const [dadosSafra, setDadosSafra] =useState('')
    const [erro, setErro] =useState('')
    return (
        
        <View style={styles.login}>
            <Image
                // Local da imagem
                source={logoAgroclimate}
                // Definindo a largura e altura da imagem
                style={{ width: 150, height: 150 }}
                // Pra nao cortar a imagem
                resizeMode="contain"
            />
            <Text style={styles.titulo}>Informe a safra que deseja vizualizar:</Text>

            
            <Input placeholder="Id Safra:"
            value={idSafra} onChangeText={setIdSafra} />
            
            <Button onPress={()=>{
                if(idSafra=='')return setErro('Id inválido')

                api.get('/safras/' + idSafra)
                .then(response=>setDadosSafra(response.data))
                .catch(()=>setErro ('Safra não encontrada'))

            }} >Vizualizar</Button>

            {erro ?(
                <Text>
                    {erro}
                </Text>
    
            ) : null}

            {dadosSafra ? (
                <View>
                    <Text>
                        
                        Data de inicio: {dayjs( dadosSafra.dataInicio)
                        .format('DD/MM/YYYY')} 
                    </Text>
                </View>
            ) : null}

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        // Espaço interno
        padding: 28,
        // Espaçamento entre itens
        gap: 27,

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