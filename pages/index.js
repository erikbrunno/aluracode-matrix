import appConfig from '../config.json'
import {Box, Button, Text, TextField, Image} from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'

function Titulo(props) {
    console.log(props)
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            font-size: 24px;
            font-weight: 600;
          }
        `}</style>
      </>
    );
  }
  
  export default function PaginaInicial() {
  
    const [username, setUsername] = React.useState('erikbrunno')
    const roteamento = useRouter()

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage:
              'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%',
              maxWidth: '700px',
              borderRadius: '5px',
              padding: '32px',
              margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function handleSubmit(event) {
                event.preventDefault() //Previse o reload da pagina
                roteamento.push(`chat?username=${username}`) //Navega para pagina /chat
              }}
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100%', sm: '50%' },
                textAlign: 'center',
                marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text
                variant="body3"
                styleSheet={{
                  marginBottom: '32px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
              >
                {appConfig.name}
              </Text>
              {/* <input type="text" 
                value={username}
                onChange={function handleChange(event) {
                  setUsername(event.target.value)
                }}
              /> */}
  
              <TextField
                value={username}
                onChange={function handleChange(event) {
                  setUsername(event.target.value)
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type="submit"
                label="Entrar"
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals['000'],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px',
                }}
              >
                {username}
              </Text>
            </Box>
          </Box>
        </Box>
      </>
    );
  }


//Component React
// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyles />
//             <Titulo tag="h2">Boas vindas de volta</Titulo>
//             <h2>Discord - Alura Matriz</h2>
//             <style jsx>{`
//                 h1 {
//                     color: red;
//                 }
//             `}</style>
//         </div>
        
//     )
// }
  
// export default HomePage