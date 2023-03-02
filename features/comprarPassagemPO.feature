Feature: Comprar Passagens Aereas
    Scenario: Selecionar Origem e Destino do Voo
        Given acesso o site BlazeDemo
        When seleciono origem como "Sao Paolo" e destino como "Dublin"
        Then exibe o titulo da guia como "BlazeDemo - reserve"
        And exibe