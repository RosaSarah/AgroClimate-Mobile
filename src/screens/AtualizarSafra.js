import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import logoAgroclimate from '../../assets/agroclimate.png'
import { api } from "../services/api";
import { useState } from "react";
import dayjs from "dayjs";

export function AtualizarSafra({navigation}) {
    const [ nome, setnome] = useState('')
    const [dataInicio, setDataInicio] =useState('')
    const [areaTotal, setAreaTotal] =useState('')
    const [dataTermino, setDataTermino] =useState('')
    const [dadosSafra, setDadosSafra] =useState('')
    const [erro, setErro] =useState('')
    return (
        
        <View style={styles.login}>
            
            <Text style={styles.titulo}>Digite o id da Safra a ser alterada:</Text>

            <Input placeholder="Id Safra:"
            value={idSafra} onChangeText={setIdSafra} />


            <Button onPress={()=>{
                if(idSafra=='')return setErro('Id inválido')

                api.get('/safras/' + idSafra)
                .then(response=>setDadosSafra(response.data))
                .catch(()=>setErro ('Safra não encontrada'))

            }} >Buscar</Button>
            
            <Input placeholder="Nome Safra:"
            value={nome} onChangeText={setnome} />
            
            <Input placeholder="Data de início:"
            value={dataInicio} onChangeText={setDataInicio} />
            
            <Input placeholder="Área total:"
            value={areaTotal} onChangeText={setAreaTotal} />
            
            <Input placeholder="Data de término:"
            value={dataTermino} onChangeText={setDataTermino} />
            
            

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