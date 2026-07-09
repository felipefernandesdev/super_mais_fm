# language: pt
Funcionalidade: Player de Rádio ao Vivo
  Como ouvinte da Super+ FM 104,9
  Quero reproduzir o stream ao vivo no navegador
  Para ouvir a rádio sem instalar aplicativos

  Contexto:
    Dado que estou na página inicial do site
    E o elemento de áudio aponta para "https://stream3.svrdedicado.org:8242/stream"

  Cenário: Ouvinte inicia a reprodução
    Dado que o áudio está pausado
    Quando clico no botão "Play"
    Então a reprodução do stream é iniciada
    E o estado do player passa a "tocando"

  Cenário: Ouvinte pausa a reprodução
    Dado que o áudio está tocando
    Quando clico no botão "Pause"
    Então a reprodução do stream é interrompida
    E o estado do player passa a "pausado"

  Cenário: Identidade visual é exibida
    Dado que a página carregou
    Então vejo o logo da rádio
    E vejo o título "Super+ FM 104,9"
    E vejo a frase promocional

  Cenário: Stream indisponível
    Dado que o host de stream está fora do ar
    Quando clico em "Play"
    Então a reprodução falha
    E nenhum aviso é exibido ao ouvinte
    # GAP: hoje não há tratamento de erro (ver ROADMAP v0.2.0)
