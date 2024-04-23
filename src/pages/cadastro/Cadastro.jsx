import { TextField, Button, InputLabel, Select, MenuItem, FormControl} from "@mui/material"
import { useForm } from "react-hook-form"
import styles from "./cadastro.module.css"
import { Link } from "react-router-dom"
import { TrilhasContext } from "../../context/TrilhasContext"
import { useContext } from "react"

export default function Cadastro(){
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {addTrail} = useContext(TrilhasContext)

    
    function onSubmit(formValue){
        console.log("Valores do formulário\n", formValue)
        
        addTrail(formValue)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
               <div className={styles.formItem}> 
                    <TextField 
                    id = "nome"
                    name = "nome"
                    type = "text" 
                    label = "Nome da trilha"
                    variant = "outlined"
                    fullWidth = {true}
                    error = {errors?.nome}
                    helperText = {errors.nome?.message} 
                    {...register("nome", {
                        required : "Insira o nome da trilha",
                        minLength : {
                            value : 6,
                            message : "O nome precisa ter pelo menos 6 caracteres"
                        },
                        maxLength : {
                            value: 100,
                            message : "O nome pode ter no máximo 100 caracteres"
                        }

                })}/>
            </div>
                 
            <div className={styles.formItem}> 
                <div className={styles.formControl}>

                
                    <TextField 
                    id="duracao" 
                    name="duracao"
                    label="Duração(min)" 
                    variant="outlined"
                    type="number"
                    error = {errors?.duracao}
                    helperText = {errors.duracao?.message} 
                    {...register("duracao", {
                        required: "Por favor, insira a duração da trilha",
                        min: {
                            value: 15,
                            message : "A duração miníma é de 15 minutos"
                        },
                        maxLength: {
                            value : 4,
                            message : "Máximo de 4 caracteres"
                        }
                    }) } 
                    
                    />
            

                    <TextField
                        type="number"
                        name="trajeto"
                        id="trajeto"
                        label="Trajeto"
                        error = {errors?.trajeto}
                        helperText = {errors.trajeto?.message} 
                        {...register("trajeto", {
                            required : "Por favor, insira o trajeto da trilha",
                            maxLength : {
                                value : 5,
                                message : "Máximo de 5 caracteres"
                            }
                        })}
                    />
                </div>
            </div>
            <div className={styles.formItem}> 
                <div className={styles.formControl}>
                    <TextField
                        name="cidade"
                        id="cidade"
                        type="text"
                        label="Cidade"
                        error = {errors?.cidade}
                        helperText = {errors.cidade?.message} 
                        {...register("cidade", {
                            required : "Por favor, insira a cidade!",
                            maxLength : {
                                value : 60,
                                message : "Máximo de 60 caracteres"
                            }
                        })}
                    />
                    
                    <FormControl error = {errors?.estado}>
                        <InputLabel id="estado">Estado</InputLabel>
                        <Select
                            defaultValue= ""
                            labelId="estado"
                            label="Estado"
                            
                            {...register("estado", {
                                required : "Por favor, insira o estado"
                            })}   
                        >
                            
                            <MenuItem value="AC">AC</MenuItem>
                            <MenuItem value="AL">AL</MenuItem>
                            <MenuItem value="AP">AP</MenuItem>
                            <MenuItem value="AM">AM</MenuItem>
                            <MenuItem value="BA">BA</MenuItem>
                            <MenuItem value="CE">CE</MenuItem>
                            <MenuItem value="DF">DF</MenuItem>
                            <MenuItem value="ES">ES</MenuItem>
                            <MenuItem value="GO">GO</MenuItem>
                            <MenuItem value="MA">MA</MenuItem>
                            <MenuItem value="MT">MT</MenuItem>
                            <MenuItem value="MS">MS</MenuItem>
                            <MenuItem value="MG">MG</MenuItem>
                            <MenuItem value="PA">PA</MenuItem>
                            <MenuItem value="PB">PB</MenuItem>
                            <MenuItem value="PR">PR</MenuItem>
                            <MenuItem value="PE">PE</MenuItem>
                            <MenuItem value="PI">PI</MenuItem>
                            <MenuItem value="RJ">RJ</MenuItem>
                            <MenuItem value="RN">RN</MenuItem>
                            <MenuItem value="RS">RS</MenuItem>
                            <MenuItem value="RO">RO</MenuItem>
                            <MenuItem value="RR">RR</MenuItem>
                            <MenuItem value="SC">SC</MenuItem>
                            <MenuItem value="SP">SP</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="TO">TO</MenuItem>
                        </Select>

                    </FormControl>
                </div>
            </div>
            <div className={styles.formItem}> 
                <div className={styles.formControl}>
                    <TextField
                        name="autor"
                        id="autor"
                        type="text"
                        label="Nome completo usuário"
                        error = {errors?.autor}
                        helperText = {errors.autor?.message} 
                        {...register("autor", {
                            maxLength : {
                                value : 60,
                                message : "Máximo de 60 caracteres"
                            }
                        })}
                    />
            

                    <FormControl error = {errors?.nivel}>
                        <InputLabel id="nivel">Dificuldade</InputLabel>
                        <Select
                            defaultValue= ""
                            labelId="nivel"
                            label="nivel"
                            {...register("nivel", {
                                required : "Por favor, insira a dificuldade"
                            })}
                        >
                            <MenuItem value="iniciante">Iniciante</MenuItem>
                            <MenuItem value="intermediario">Intermediário</MenuItem>
                            <MenuItem value="Dificil">Difícil</MenuItem>


                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className={styles.formItem}>
                <FormControl
                    fullWidth = {true}
                    error = {errors?.nivel}
                >
                    <InputLabel id="type">Tipo de trilha</InputLabel>
                    <Select
                        
                        defaultValue= ""
                        labelId="type"
                        label="Tipo de trilha"
                        {...register("type" , {
                            required : "Por favor, insira o tipo de trilha"
                        })}
                    
                    >

                        <MenuItem value="caminhada">Caminhada</MenuItem>
                        <MenuItem value="trekking">Trekking</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.formItem}>
                <TextField 
                    type="text"
                    label="URL da imagem"
                    fullWidth = {true}
                    id="imagem"
                    name="imagem"
                    error = {errors?.imagem}
                    helperText = {errors.imagem?.message} 
                    {...register('imagem', {
                        maxLength : {
                            value : 300,
                            message : "Máximo de 300 caracteres"
                        }
                    })}
                />
            </div>



            <div className={styles.actions}>
         
                <Button type="submit" variant="contained" onClick={() => console.log(errors.estado)}>Cadastrar</Button>
                
                <Link to="/"className={styles.ml16}>
                    <Button variant="outlined" >Voltar</Button>
                </Link>
            </div>
        </form>
    )
}

