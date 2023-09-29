import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductService from '../../services/ProductService';
import { Product } from '../../models/ProductModel';

export default class Teste extends React.Component {

    constructor(props) {
        super(props);

        this.findAllProducts()
    }

    state = {
        data: [],
        value: null,
        onChangeText: null,
        dataId: null,
        nomeInsert: null,
        marcaInsert: null,
        quantidadeInsert: null,
        valorInsert: null,
    }

    //acionado quando o componente e montado
    componentDidMount() {
        this.findAllProducts();
    }

    //escuta atualizações na lista
    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            this.findAllProducts();
        }
    }

    deleteProduct = (id) => {
        this.findProductById(id)
        if (this.state.dataId != null || this.state.dataId != undefined) {
            ProductService.deleteById(id)
            alert("produto excluido com sucesso: ")
        }
    }

    insertProduct = (nome, marca, quantidade, valor) => {
        let file: Product = new Product()
        file.nome = nome
        file.marca = marca
        file.quantidade = quantidade
        file.valor = valor

        const insertId = ProductService.addData(file);
        if (insertId == null || insertId == undefined) {
            alert("Não foi possivel inserir o novo animal")
        }
    }

    findAllProducts = () => {
        ProductService.findAll()
            .then((response: any) => {
                this.setState({
                    data: response._array,
                    isLoading: false,
                })
            }), (error) => {
                console.log(error);
            }
    }

    findProductById = (id) => {
        ProductService.findById(id)
            .then((response: any) => {
                if (response._array.length > 0 && response != null && response != undefined) {
                    this.setState({
                        dataId: response._array[0]
                    })
                } else {
                    alert("id não encontrado")
                }
            }), (error) => {
                console.log(error);
            }
    }
    render() {

        //extrai as propriedades entre chaves
        const { data, value, nomeInsert, marcaInsert, quantidadeInsert, valorInsert } = this.state;

        const productList = data.map((item, key) => {
            return (
                <>
                    <Text >
                        id:{item.id}
                        nome:{item.nome}
                        marca:{item.marca}
                        quantidade:{item.quantidade}
                        valor:{item.valor}
                    </Text>
                </>
            )
        })

        return (

            <View style={styles.container}>

                <Text style={{ fontSize: 20, paddingBottom: 20 }}>Lista de Produtos</Text>
                <TextInput
                    placeholder="digite o id"
                    style={styles.textInput}
                    onChangeText={text => { this.setState({ value: text }) }}
                    value={value}
                />
                <View style={styles.containerTouch}>
                    <TouchableOpacity onPress={() => { value == null ? alert("O campo de id não pode ser vazio") : this.deleteProduct(value) }} style={{ alignItems: "center", backgroundColor: 'green' }}>
                        <Icon name="md-remove" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="digite o nome do novo produto"
                    style={styles.textInput}
                    onChangeText={textAdd => { this.setState({ nomeInsert: textAdd }) }}
                    value={nomeInsert}
                />
                <TextInput
                    placeholder="digite a marca do novo produto"
                    style={styles.textInput}
                    onChangeText={textAdd => { this.setState({ marcaInsert: textAdd }) }}
                    value={marcaInsert}
                />
                <TextInput
                    placeholder="digite a quantidade do novo produto"
                    style={styles.textInput}
                    onChangeText={textAdd => { this.setState({ quantidadeInsert: textAdd }) }}
                    value={quantidadeInsert}
                />
                <TextInput
                    placeholder="digite o valor do novo produto"
                    style={styles.textInput}
                    onChangeText={textAdd => { this.setState({ valorInsert: textAdd }) }}
                    value={valorInsert}
                />

                <View style={styles.containerTouch}>
                    <TouchableOpacity onPress={() => {
                        console.log(nomeInsert)
                        console.log(marcaInsert)
                        console.log(quantidadeInsert)
                        console.log(valorInsert)
                        nomeInsert == null ? alert("Todos os campos devem ser preenchidos")
                            : this.insertProduct(nomeInsert, marcaInsert, quantidadeInsert, valorInsert)
                    }}
                        style={{ alignItems: "center", backgroundColor: 'green' }}>

                        <Icon name="md-add" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                {productList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInput: {
        alignItems: "center",
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    containerTouch: {
        width: 200,
        padding: 10
    }
});