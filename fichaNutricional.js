//A Ficha Tecnica de Anamnese Nutricional//

const ficha = {
  DadosPessoais: {
    Nome: window.prompt("Nome Completo"),
    Idade: Number.parseInt(window.prompt("Data de Nascimento / Idade")),
    Sexo: window.prompt("Sexo"),
    EstadoCivil: window.prompt("Estado Civil"),
    Profissao: window.prompt("Profissão"),
    Escolaridade: window.prompt("Escolaridade"),
    Telefone: Number.parseInt(window.prompt("WhatsApp")),
    Email: window.prompt("E-mail"),
    Endereco: window.prompt("Endereço"),
  },

  QueixaPrincipal: {
    MotivoDaConsulta: window.prompt("Motivo da consulta"),
    Objetivo: window.prompt("Objetivo"),
  },

  HistoricoDeDoencas: {
    Doencas: {
      Hipertensao: window.prompt("hipertenção ?"),
      Diabetes: window.prompt("Diabetes mellitus ?"),
      Dislipidemia: window.prompt("Dislipidemia ?"),
      Gastrointestinais: window.prompt("Doenças gastrointestinais ?"),
      Renais: window.prompt("Doenças renias ?"),
      Hepaticas: window.prompt("Doenças hepáticas ?"),
      Cardiacas: window.prompt("Doenças cardíacas ?"),
      Respiratorias: window.prompt("Doenças respiratórias ?"),
      Autoimunes: window.prompt("Doenças autoimunes ?"),
      Alergias: window.prompt("Alguma alergia ?"),
      Intolerancias: window.prompt("Alguma intolerância alimetícia ?"),
    },

    Cirugias: {
      Tipo: window.prompt("Que tipo de cirurgia ?"),
      Data: window.prompt("Data"),
    },

    UsoMedicamentos: {
      Nome: window.prompt("Medicamentos que você toma ?"),
      Dose: Number.parseInt(window.prompt("Dose do medicamento")),
      Frequencia: window.prompt("Frequência em que toma ?"),
      TempoDeUso: window.prompt("A quanto tempo toma esse medicamento ?"),
    },

    Suplementos: {
      Tipo: window.prompt("Tipo de suplemente"),
      Dose: window.prompt("Dose do suplemento"),
      FrequenciaSuplemento: window.prompt("Frequência em que toma"),
    },

    Historico: {
      Obesidade: window.prompt("Histórico de obesidade na familia ?"),
      Diabetes1: window.prompt("Histórico de diabetes na familia ?"),
      Hipertensao1: window.prompt("Hitórico  de hipertensão"),
      Cancer: window.prompt("Histórico de câncer na familia ?"),
      DoencasCardiacas: window.prompt(
        "Histórico de doenças cardíacas na familia ?",
      ),
    },
  },

  HabitosDeVida: {
    Sono: {
      HorarioDormir: window.prompt("Que horário você dorme ?"),
      HorarioAcordar: window.prompt("Que horário você dorme ?"),
      QualidadeDoSono: window.prompt("Qual sua qualidade de sono ?"),
      QuantidadeDeHoras: window.prompt("Quantidade de horas que dorme"),
    },

    Estresse: {
      Nivel: window.prompt("Nível de sono (baixo / médio / alto)"),
      CausasPrincipais: window.prompt("Causas desse estresse"),
    },

    AtividadeFisica: {
      TipoDeExercicio: window.prompt("Que tipo de Exercícios você faz ?"),
      FrequenciaSemanal: Number.parseInt(window.prompt("Frequência semanal")),
      Duracao: window.prompt("Duração do Exercício"),
      Intensidade: window.prompt("Intensidade do Exercício"),
    },

    HabitoIntestinal: {
      FrequenciaEvacuatoria: Number.parseInt(
        window.prompt("Sua frequência evaquatória"),
      ),
      ConsistenciaDasFezes: Number.parseInt(
        window.prompt(
          "Consistência das fezes de acordo com a escala de Bristol",
        ),
      ),
      SintomasAssociados: window.prompt("Sintomas associados ?"),
    },

    ConsumoDeAgua: {
      QuantidadeAproximadaPorDia: Number.parseInt(
        window.prompt("Quantidade aproximada por dia"),
      ),
    },

    ConsumoDeAlcool: {
      FrequenciaAlcool: Number.parseInt(window.prompt("Frequência de Álcool")),
      TipoAlcool: window.prompt("Tipo de bebida alcoólica"),
      QuantidadeAlcool: Number.parseInt(
        window.prompt("Quantidade aproximada de álcool"),
      ),
    },

    Tabagismo: {
      FumaAtualmente: window.prompt("Fuma atualmente ?"),
      FumouAntigamente: window.prompt("Já fumou ?"),
      TempoDeAbstinencia: window.prompt(
        "Quanto tempo até ter vontade de fumar ?",
      ), // Corrigido Window.prompt para window.prompt
    },
  },

  AvaliacaoAlimentar: {
    PreferenciasEAversoes: {
      AlimentosPreferidos: window.prompt("Seus alimentos preferidos"),
      AlimentosNaoPreferidos: window.prompt("Alimentos que não gosta"),
      AlimentosDesconfortaveis: window.prompt(
        "Alimentos que causam desconforto",
      ),
    },

    IntoleranciasEAlergias: {
      Relatadas: window.prompt("Alergias já relatadas"),
      Confirmadas: window.prompt("Alergias confirmadas por exames"),
    },

    RotinaAlimentar: {
      CafeDaManha: {
        Horario: window.prompt("Que horário toma caféda da manhã"),
        AlimentosEQuantidades: window.prompt(
          "Que alimentos comeu e em que quantidade",
        ),
      },
      LancheDaManha: window.prompt("Seu lancha da manhã"),
      Jantar: window.prompt("Seu jantar"),
      Ceia: window.prompt("O que come em ceia"),
      Petiscos: window.prompt("O que petisca ao longo do dia"),
      ConsumoDeDoces: Number.parseInt(
        window.prompt("Quantos de doces come ao dia"),
      ),
      ConsumoDeAlimentosUltraprocessados: Number.parseInt(
        window.prompt("Quantidade de alimentos ultraprocessados come ao dia"),
      ),
      FrequenciaDeRefeicoesForaDeCasa: window.prompt(
        "Frequencia em que come fora",
      ),
    },
    MetodoDePreparo: {
      MetodoCozinha: window.prompt("Grelhado / cozido / frito / assado"),
      UsoDeGorduras: window.prompt("Utiliza óleo ou gorduras ?"),
    },
    ChecklistDeConsumoNoDia: {
      Frutas: Number.parseInt(window.prompt("Quantas frutas come ao dia")),
      VerdurasELegumes: Number.parseInt(
        window.prompt("Quantas verduras e legumes come ao dia"),
      ),
      CereaisIntegrais: Number.parseInt(
        window.prompt("Quantos cereais integrais come ao dia"),
      ),
      Leguminosas: Number.parseInt(
        window.prompt("Quantas comidas leguminosas come ao dia"),
      ),
      Proteinas: Number.parseInt(
        window.prompt("Quantos alimentos proteios você come ao dia"),
      ),
      Doces: Number.parseInt(window.prompt("Quantos doces come ao dia")),
      RefriOuSucosIndustrializados: Number.parseInt(
        window.prompt(
          "Quantos refrigerantes ou sucos industrializdos come ao dia",
        ),
      ),
      FastFood: Number.parseInt(window.prompt("Quantos fastfood come ao dia")),
    },
  },
  AvaliacaoAntropometrica: {
    PesoAtual: Number.parseInt(window.prompt("Peso atual")),
    PesoHabitual: Number.parseInt(window.prompt("Peso habitual")),
    PesoDesejado: Number.parseInt(window.prompt("Peso desejado")),
    Altura: Number.parseInt(window.prompt("Altura")),
    IMC: Number.parseInt(window.prompt("IMC")),
    CircunferenciaAbdominal: Number.parseInt(
      window.prompt("Circunferência abdominal"),
    ),
    CircunferenciaQuadril: Number.parseInt(
      window.prompt("Circunferência quadril"),
    ),
    CircunferenciaBraco: Number.parseInt(window.prompt("Circunferência braço")),
    DobrasCutaneas: Number.parseInt(
      window.prompt("Dobras cutâneas (se aplicável)"),
    ),
    PercentualGorduraCorporal: Number.parseInt(
      window.prompt("Percentual de gordura corporal (se aplicável)"),
    ),
    MassaMagra: Number.parseInt(window.prompt("Massa magra (se aplicável)")),
  },
  AvaliacaoClinicaEBioquimica: {
    PressaoArterialSistólica: Number.parseInt(
      window.prompt("Sua pressão arterial sistólica"),
    ), // Corrigido parseint para parseInt
    PressaoArterialDiastólica: Number.parseInt(
      window.prompt("Sua pressão arterial diastólica"),
    ), // Corrigido parseint para parseInt
    ExamesRecentes: window.prompt("Seus exames recentes"),
    Triglicerideos: Number.parseInt(
      window.prompt("Informe o valor de triglicerídeos"),
    ),
  },
  ExpectativasEObjetivosDoPaciente: {
    Esteticos: window.prompt(
      "Objetivos estéticos (emagrecer, definir, aumentar massa muscular)",
    ),
    Clinicos: window.prompt(
      "Objetivos clínicos (controlar colesterol, glicemia, pressão arterial, intestino)",
    ),
    QualidadeDeVida: window.prompt(
      "Objetivos de qualidade de vida (melhorar sono, energia, disposição)",
    ),
    Esportivos: window.prompt(
      "Objetivos esportivos (performance, recuperação, resistência)",
    ),
  },
};

//os Document.Write da Ficha de Anmanese Nutricional//

document.write("<h2>Dados Pessoais</h2>");
document.write("<p>Nome: " + ficha.DadosPessoais.Nome + "</p>");
document.write("<p>Idade: " + ficha.DadosPessoais.Idade + "</p>");
document.write("<p>Sexo: " + ficha.DadosPessoais.Sexo + "</p>");
document.write("<p>Estado Civil: " + ficha.DadosPessoais.EstadoCivil + "</p>");
document.write("<p>Profissão: " + ficha.DadosPessoais.Profissao + "</p>");
document.write("<p>Escolaridade: " + ficha.DadosPessoais.Escolaridade + "</p>");
document.write("<p>Telefone: " + ficha.DadosPessoais.Telefone + "</p>");
document.write("<p>Email: " + ficha.DadosPessoais.Email + "</p>");
document.write("<p>Endereço: " + ficha.DadosPessoais.Endereco + "</p>");

document.write("<h2>Queixa Principal</h2>");
document.write(
  "<p>Motivo da Consulta: " + ficha.QueixaPrincipal.MotivoDaConsulta + "</p>",
);
document.write("<p>Objetivo: " + ficha.QueixaPrincipal.Objetivo + "</p>");

document.write("<h2>Histórico de Doenças</h2>");
document.write(
  "<p>Hipertensão: " + ficha.HistoricoDeDoencas.Doencas.Hipertensao + "</p>",
);
document.write(
  "<p>Diabetes: " + ficha.HistoricoDeDoencas.Doencas.Diabetes + "</p>",
);
document.write(
  "<p>Dislipidemia: " + ficha.HistoricoDeDoencas.Doencas.Dislipidemia + "</p>",
);
document.write(
  "<p>Gastrointestinais: " +
    ficha.HistoricoDeDoencas.Doencas.Gastrointestinais +
    "</p>",
);
document.write(
  "<p>Renais: " + ficha.HistoricoDeDoencas.Doencas.Renais + "</p>",
);
document.write(
  "<p>Hepáticas: " + ficha.HistoricoDeDoencas.Doencas.Hepaticas + "</p>",
);
document.write(
  "<p>Cardíacas: " + ficha.HistoricoDeDoencas.Doencas.Cardiacas + "</p>",
);
document.write(
  "<p>Respiratórias: " +
    ficha.HistoricoDeDoencas.Doencas.Respiratorias +
    "</p>",
);
document.write(
  "<p>Autoimunes: " + ficha.HistoricoDeDoencas.Doencas.Autoimunes + "</p>",
);
document.write(
  "<p>Alergias: " + ficha.HistoricoDeDoencas.Doencas.Alergias + "</p>",
);
document.write(
  "<p>Intolerâncias: " +
    ficha.HistoricoDeDoencas.Doencas.Intolerancias +
    "</p>",
);

document.write("<h3>Cirurgias</h3>");
document.write("<p>Tipo: " + ficha.HistoricoDeDoencas.Cirugias.Tipo + "</p>");
document.write("<p>Data: " + ficha.HistoricoDeDoencas.Cirugias.Data + "</p>");

document.write("<h3>Uso de Medicamentos</h3>");
document.write(
  "<p>Nome: " + ficha.HistoricoDeDoencas.UsoMedicamentos.Nome + "</p>",
);
document.write(
  "<p>Dose: " + ficha.HistoricoDeDoencas.UsoMedicamentos.Dose + "</p>",
);
document.write(
  "<p>Frequência: " +
    ficha.HistoricoDeDoencas.UsoMedicamentos.Frequencia +
    "</p>",
);
document.write(
  "<p>Tempo de Uso: " +
    ficha.HistoricoDeDoencas.UsoMedicamentos.TempoDeUso +
    "</p>",
);

document.write("<h3>Suplementos</h3>");
document.write(
  "<p>Tipo: " + ficha.HistoricoDeDoencas.Suplementos.Tipo + "</p>",
);
document.write(
  "<p>Dose: " + ficha.HistoricoDeDoencas.Suplementos.Dose + "</p>",
);
document.write(
  "<p>Frequência: " +
    ficha.HistoricoDeDoencas.Suplementos.FrequenciaSuplemento +
    "</p>",
);

document.write("<h3>Histórico Familiar</h3>");
document.write(
  "<p>Obesidade: " + ficha.HistoricoDeDoencas.Historico.Obesidade + "</p>",
);
document.write(
  "<p>Diabetes: " + ficha.HistoricoDeDoencas.Historico.Diabetes1 + "</p>",
);
document.write(
  "<p>Hipertensão: " + ficha.HistoricoDeDoencas.Historico.Hipertensao1 + "</p>",
);
document.write(
  "<p>Câncer: " + ficha.HistoricoDeDoencas.Historico.Cancer + "</p>",
);
document.write(
  "<p>Doenças Cardíacas: " +
    ficha.HistoricoDeDoencas.Historico.DoencasCardiacas +
    "</p>",
);

document.write("<h2>Hábitos de Vida</h2>");
document.write("<h3>Sono</h3>");
document.write(
  "<p>Horário Dormir: " + ficha.HabitosDeVida.Sono.HorarioDormir + "</p>",
);
document.write(
  "<p>Horário Acordar: " + ficha.HabitosDeVida.Sono.HorarioAcordar + "</p>",
);
document.write(
  "<p>Qualidade do Sono: " + ficha.HabitosDeVida.Sono.QualidadeDoSono + "</p>",
);
document.write(
  "<p>Quantidade de Horas: " +
    ficha.HabitosDeVida.Sono.QuantidadeDeHoras +
    "</p>",
);

document.write("<h3>Estresse</h3>");
document.write("<p>Nível: " + ficha.HabitosDeVida.Estresse.Nivel + "</p>");
document.write(
  "<p>Causas Principais: " +
    ficha.HabitosDeVida.Estresse.CausasPrincipais +
    "</p>",
);

document.write("<h3>Atividade Física</h3>");
document.write(
  "<p>Tipo de Exercício: " +
    ficha.HabitosDeVida.AtividadeFisica.TipoDeExercicio +
    "</p>",
);
document.write(
  "<p>Frequência Semanal: " +
    ficha.HabitosDeVida.AtividadeFisica.FrequenciaSemanal +
    "</p>",
);
document.write(
  "<p>Duração: " + ficha.HabitosDeVida.AtividadeFisica.Duracao + "</p>",
);
document.write(
  "<p>Intensidade: " + ficha.HabitosDeVida.AtividadeFisica.Intensidade + "</p>",
);

document.write("<h3>Hábito Intestinal</h3>");
document.write(
  "<p>Frequência Evacuatória: " +
    ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria +
    "</p>",
);
document.write(
  "<p>Consistência das Fezes: " +
    ficha.HabitosDeVida.HabitoIntestinal.ConsistenciaDasFezes +
    "</p>",
);
document.write(
  "<p>Sintomas Associados: " +
    ficha.HabitosDeVida.HabitoIntestinal.SintomasAssociados +
    "</p>",
);

document.write("<h3>Consumo de Água</h3>");
document.write(
  "<p>Quantidade por Dia: " +
    ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia +
    "</p>",
);

document.write("<h3>Consumo de Álcool</h3>");
document.write(
  "<p>Frequência: " +
    ficha.HabitosDeVida.ConsumoDeAlcool.FrequenciaAlcool +
    "</p>",
);
document.write(
  "<p>Tipo: " + ficha.HabitosDeVida.ConsumoDeAlcool.TipoAlcool + "</p>",
);
document.write(
  "<p>Quantidade: " +
    ficha.HabitosDeVida.ConsumoDeAlcool.QuantidadeAlcool +
    "</p>",
);

document.write("<h3>Tabagismo</h3>");
document.write(
  "<p>Fuma Atualmente: " +
    ficha.HabitosDeVida.Tabagismo.FumaAtualmente +
    "</p>",
);
document.write(
  "<p>Já Fumou: " + ficha.HabitosDeVida.Tabagismo.FumouAntigamente + "</p>",
);
document.write(
  "<p>Tempo de Abstinência: " +
    ficha.HabitosDeVida.Tabagismo.TempoDeAbstinencia +
    "</p>",
);

document.write("<h2>Avaliação Alimentar</h2>");
document.write("<h3>Preferências e Aversões</h3>");
document.write(
  "<p>Alimentos Preferidos: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosPreferidos +
    "</p>",
);
document.write(
  "<p>Alimentos Não Preferidos: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosNaoPreferidos +
    "</p>",
);
document.write(
  "<p>Alimentos Desconfortáveis: " +
    ficha.AvaliacaoAlimentar.PreferenciasEAversoes.AlimentosDesconfortaveis +
    "</p>",
);

document.write("<h3>Intolerâncias e Alergias</h3>");
document.write(
  "<p>Relatadas: " +
    ficha.AvaliacaoAlimentar.IntoleranciasEAlergias.Relatadas +
    "</p>",
);
document.write(
  "<p>Confirmadas: " +
    ficha.AvaliacaoAlimentar.IntoleranciasEAlergias.Confirmadas +
    "</p>",
);

document.write("<h3>Rotina Alimentar</h3>");
document.write(
  "<p>Café da Manhã: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.CafeDaManha.Horario +
    " - " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.CafeDaManha.AlimentosEQuantidades +
    "</p>",
);
document.write(
  "<p>Lanche da Manhã: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.LancheDaManha +
    "</p>",
);
document.write(
  "<p>Jantar: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Jantar + "</p>",
);
document.write(
  "<p>Ceia: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Ceia + "</p>",
);
document.write(
  "<p>Petiscos: " + ficha.AvaliacaoAlimentar.RotinaAlimentar.Petiscos + "</p>",
);
document.write(
  "<p>Consumo de Doces: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.ConsumoDeDoces +
    "</p>",
);
document.write(
  "<p>Consumo de Ultraprocessados: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar
      .ConsumoDeAlimentosUltraprocessados +
    "</p>",
);
document.write(
  "<p>Frequência de Refeições Fora de Casa: " +
    ficha.AvaliacaoAlimentar.RotinaAlimentar.FrequenciaDeRefeicoesForaDeCasa +
    "</p>",
);

document.write("<h3>Método de Preparo</h3>");
document.write(
  "<p>Método: " +
    ficha.AvaliacaoAlimentar.MetodoDePreparo.MetodoCozinha +
    "</p>",
);
document.write(
  "<p>Uso de Gorduras: " +
    ficha.AvaliacaoAlimentar.MetodoDePreparo.UsoDeGorduras +
    "</p>",
);

document.write("<h3>Checklist de Consumo no Dia</h3>");
document.write(
  "<p>Frutas: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas +
    "</p>",
);
document.write(
  "<p>Verduras e Legumes: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes +
    "</p>",
);
document.write(
  "<p>Cereais Integrais: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.CereaisIntegrais +
    "</p>",
);
document.write(
  "<p>Leguminosas: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Leguminosas +
    "</p>",
);
document.write(
  "<p>Proteínas: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Proteinas +
    "</p>",
);
document.write(
  "<p>Doces: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Doces +
    "</p>",
);
document.write(
  "<p>Refrigerantes/Sucos Industrializados: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia
      .RefriOuSucosIndustrializados +
    "</p>",
);
document.write(
  "<p>Fast Food: " +
    ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.FastFood +
    "</p>",
);

document.write("<h2>Avaliação Antropométrica</h2>");
document.write(
  "<p>Peso Atual: " + ficha.AvaliacaoAntropometrica.PesoAtual + "</p>",
);
document.write(
  "<p>Peso Habitual: " + ficha.AvaliacaoAntropometrica.PesoHabitual + "</p>",
);
document.write(
  "<p>Peso Desejado: " + ficha.AvaliacaoAntropometrica.PesoDesejado + "</p>",
);
document.write("<p>Altura: " + ficha.AvaliacaoAntropometrica.Altura + "</p>");
document.write("<p>IMC: " + ficha.AvaliacaoAntropometrica.IMC + "</p>");
document.write(
  "<p>Circunferência Abdominal: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal +
    "</p>",
);
document.write(
  "<p>Circunferência Quadril: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaQuadril +
    "</p>",
);
document.write(
  "<p>Circunferência Braço: " +
    ficha.AvaliacaoAntropometrica.CircunferenciaBraco +
    "</p>",
);
document.write(
  "<p>Dobras Cutâneas: " +
    ficha.AvaliacaoAntropometrica.DobrasCutaneas +
    "</p>",
);
document.write(
  "<p>% Gordura Corporal: " +
    ficha.AvaliacaoAntropometrica.PercentualGorduraCorporal +
    "</p>",
);
document.write(
  "<p>Massa Magra: " + ficha.AvaliacaoAntropometrica.MassaMagra + "</p>",
);

document.write("<h2>Avaliação Clínica e Bioquímica</h2>");
document.write(
  "<p>Pressão Sistólica: " +
    ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica +
    "</p>",
);
document.write(
  "<p>Pressão Diastólica: " +
    ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica +
    "</p>",
);
document.write(
  "<p>Exames Recentes: " +
    ficha.AvaliacaoClinicaEBioquimica.ExamesRecentes +
    "</p>",
);
document.write(
  "<p>Triglicerídeos: " +
    ficha.AvaliacaoClinicaEBioquimica.Triglicerideos +
    "</p>",
);

document.write("<h2>Expectativas e Objetivos do Paciente</h2>");
document.write(
  "<p>Estéticos: " + ficha.ExpectativasEObjetivosDoPaciente.Esteticos + "</p>",
);
document.write(
  "<p>Clínicos: " + ficha.ExpectativasEObjetivosDoPaciente.Clinicos + "</p>",
);
document.write(
  "<p>Qualidade de Vida: " +
    ficha.ExpectativasEObjetivosDoPaciente.QualidadeDeVida +
    "</p>",
);
document.write(
  "<p>Esportivos: " +
    ficha.ExpectativasEObjetivosDoPaciente.Esportivos +
    "</p>",
);

//As Perguntas//

//Script - if else//

//1//

document.write(
  "<h2> Agora, saiba as conclusões obtidas mediante suas respostas <h2/> <br>",
);

if (ficha.AvaliacaoAntropometrica.IMC > 25) {
  document.write("<p> Você está acima do peso. </p> ");
} else {
  document.write("<p> Você está abaixo do peso.</p>");
}

//2//

if (
  ficha.AvaliacaoAntropometrica.PesoDesejado <
  ficha.AvaliacaoAntropometrica.PesoAtual
) {
  document.write("<p> Seu objetivo é, por certo, emagrecer. </p> ");
} else {
  document.write("<p> Seu objetivo é, por certo, ganhar massa. </p> ");
}

//3//

if (ficha.HabitosDeVida.Sono.QuantidadeDeHoras < 7) {
  document.write("<p> Sono insuficiente... </p> ");
} else {
  document.write("<p> Sono insuficiente... </p>");
}

//4//

if (
  ficha.DadosPessoais.Sexo === "Masculino" &&
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal > 102
) {
  document.write("<p> Risco cardiovascular. </p>");
} else if (
  ficha.DadosPessoais.Sexo === "Feminino" &&
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal > 88
) {
  document.write("<p> Risco cardiovascular. </p>");
} else {
  document.write("<p> Nenhum risco cardiovascular </p>");
}

//5//

if (ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia < 2000) {
  document.write(
    "<p> Seu consumo de água, por ser menor que 2000ml, é baixo... </p> ",
  );
} else if (
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia > 2000
) {
  document.write(
    "<p> Seu consumo de água, por ser maior que 2000ml, é alto... </p> ",
  );
}

//6//

if (
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica <= 140 &&
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica <= 90
) {
  document.write("<p> Quadro de hipotensão. </p>");
} else if (
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialSistólica >= 140 &&
  ficha.AvaliacaoClinicaEBioquimica.PressaoArterialDiastólica >= 90
) {
  document.write("<p> Quadro de hipertensão </p>");
}

//7//

if (ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria < 1) {
  document.write("<p> Baixa frequência de evacuação </p> ");
} else if (
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria > 1 ||
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria <= 3
) {
  document.write("<p> Positiva frequência de evacuação </p> ");
} else {
  document.write("<p> Alta frequência de evacuação </p>");
}

//8//

if (
  ficha.AvaliacaoAntropometrica.PesoAtual >
  ficha.AvaliacaoAntropometrica.PesoHabitual
) {
  document.write("<p> Risco de ganho de peso recente... </p>");
}

//9//

if (
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Doces >
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas
) {
  document.write(
    "<p> Você consome mais doces do que frutas ao longo da semana, o que é algo não muito positivo... </p> ",
  );
} else {
  ("<p> Você consome mais frutas do que doces ao longo da semana, o que é algo muito positivo... </p> ");
}

//10//

if (ficha.AvaliacaoClinicaEBioquimica.Triglicerideos > 150) {
  document.write(
    "<p> Seus triglicerídeos se encontram em um volume maior que 150. </p>",
  );
}

//Script - Switch Case//

//1//

switch (ficha.HabitosDeVida.Estresse.Nivel) {
  case "Baixo":
    document.write("<p> Continue assim! </p> ");
    break;

  case "Médio":
    document.write(" <p> Busque melhorar... </p> ");
    break;

  case "Alto":
    document.write(" <p> Se acalme... </p>");
    break;

  default:
    document.write(" <p> Nível inválido </p>");
}

//2//

switch (ficha.HabitosDeVida.AtividadeFisica.TipoDeExercicio) {
  case "Musculação":
    document.write(" <p> Sua atividade física escolhida é musculação </p>");
    break;

  case "Corrida":
    document.write(" <p> Sua atividade física escolhida é corrida </p>");
    break;

  case "nenhuma":
    document.write(" <p> Você não exerce nenhuma atividade física </p>");
    break;

  default:
    document.write(" <p> Tipo de Esporte inválido </p>");
}

//3//

switch (ficha.AvaliacaoAlimentar.MetodoDePreparo.MetodoCozinha) {
  case "Frito":
    document.write(" <p> Muita gordura... </p>");
    break;

  case "Assado":
    document.write("<p> Saudável... </p>");
    break;

  case "Grelhado":
    document.write("<p> Também saudável... </p>");
    break;

  default:
    document.write("<p> Tipo de método Inválido </p>");
}

//4//

switch (ficha.HabitosDeVida.Sono.QualidadeDoSono) {
  case "Leve":
    document.write(" <p>Busque dormir melhor... </p>");
    break;

  case "Regular":
    document.write(" <p> Ótimo... </p>");
    break;

  case "bom":
    document.write(" <p>Busque manter... </p>");
    break;

  default:
    document.write(" <p> Qualidade posta Inválida </p>");
}

//5//

switch (ficha.HabitosDeVida.HabitoIntestinal.ConsistenciaDasFezes) {
  case 1:
    document.write(
      " <p> Peças pequenas e duras, como bolinhas separadas (constipação severa). </p>",
    );
    break;

  case 2:
    document.write(" <p> Com formato de salsicha, mas granulado e duro. </p>");
    break;

  case 3:
    document.write(
      " <p> Como uma salsicha, mas com fissuras na superfície (normal, mas ligeiramente duro). </p>",
    );
    break;

  case 4:
    document.write(
      " <p>Como uma salsicha ou serpente, suave e macio (ideal, fezes normais). </p>",
    );
    break;

  case 5:
    document.write(
      "<p> Bolhas suaves com bordas nítidas (mais soltas, tendência a diarreia). </p>",
    );
    break;

  case 6:
    document.write(
      " <p> Peças fofas com bordas em pedaços (mais pastoso, diarreia). </p>",
    );
    break;

  case 7:
    document.write(
      "<p> Aquoso, sem partes sólidas, totalmente líquido (diarreia severa). </p>",
    );
    break;

  default:
    document.write("<p> Número Inválido. </p>");
}

//6//

switch (true) {
  case ficha.AvaliacaoAntropometrica.IMC <= 18.5:
    document.write(" <p> Abaixo do peso </p>");
    break;

  case ficha.AvaliacaoAntropometrica.IMC >= 24.9:
    document.write("<p> Peso normal </p>");
    break;

  case ficha.AvaliacaoAntropometrica.IMC >= 29.9:
    document.write("<p> Sobre-peso </p>");

  case ficha.AvaliacaoAntropometrica.IMC >= 34.9:
    document.write("<p> Obesidade grau 1 </p>");
    break;
  default:
    document.write("<p> Obesidade grau 2 ou 3 </p>");
}

//7//

switch (ficha.HistoricoDeDoencas.Suplementos.Tipo) {
  case "Whey":
    document.write("<p> Você faz uso de whey como um suplemento </p>");
    break;

  case "Creatina":
    document.write(" <p>Você faz uso de creatina como um suplemento </p>");
    break;

  case "Vitamina C":
    document.write("<p> Você faz uso de vitamina C como um suplemento </p>");
    break;

  default:
    document.write("<p> Suplemento Inválido </p>");
}

//8//

switch (
  ficha.AvaliacaoAlimentar.RotinaAlimentar.FrequenciaDeRefeicoesForaDeCasa
) {
  case "Lanche":
    document.write(" <p> Às vezes, não nutri tanto... </p>");
    break;

  case "Self-service":
    document.write("<p> Nutre bem... </p>");
    break;

  case "Fast-food":
    document.write("<p> Prejudicial à saúde... </p>");
    break;

  default:
    document.write("<p> Refeição fora de casa Inválida </p>");
}

//9//

switch (ficha.HabitosDeVida.AtividadeFisica.FrequenciaSemanal) {
  case 0:
    document.write("<p> Sedentário </p>");
    break;

  case 1:
    document.write("<p> Sedentário </p>");
    break;

  case 2:
    document.write("<p> Leve </p>");
    break;

  case 3:
    document.write("<p> Sedentário </p>");
    break;

  case 4:
    document.write("<p> Sedentário </p>");
    break;

  case 5:
    document.write("<p> Moderado </p>");
    break;

  case 6:
    document.write("<p> Sedentário </p>");
    break;

  case 7:
    document.write("<p> Intenso </p>");
    break;

  default:
    document.write("<p> Número de frequência Inválido </p>");
}

//10//

switch (ficha.DadosPessoais.EstadoCivil) {
  case "Solteiro":
    document.write(
      "<p> Neste estado você pode comer comidas sem acompanhamento de outro. </p>",
    );
    break;

  case "Namorando":
    document.write(
      "<p> Neste estado você pode comer um fast-food com a(o) companheira(o) </p>",
    );

  case "Casado":
    document.write(
      "<p> Neste estado você pode comer em conjunto com mais pessoas. </p>",
    );
    break;
}

//Script - Do...While//

//1//
do {
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia += 200;
  document.write(
    `<p> Consumo de água (em ml):
                  ${ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia} </p>`,
  );
} while (
  ficha.HabitosDeVida.ConsumoDeAgua.QuantidadeAproximadaPorDia <
  ficha.AvaliacaoAntropometrica.PesoAtual * 35
);

//2//
do {
  ficha.HabitosDeVida.Sono.QuantidadeDeHoras++;
  document.write(
    `<p> Horas de sono (em hora): ${
      ficha.HabitosDeVida.Sono.QuantidadeDeHoras
    } </p>`,
  );
} while (ficha.HabitosDeVida.Sono.QuantidadeDeHoras <= 8);

//3//
do {
  ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal--;
  document.write(
    `<p> Circunferência abdominal (em cm): ${
      ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal
    } </p>`,
  );
} while (
  (ficha.DadosPessoais.Sexo.toLowerCase() === "masculino" &&
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal >= 90) ||
  (ficha.DadosPessoais.Sexo.toLowerCase() === "feminino" &&
    ficha.AvaliacaoAntropometrica.CircunferenciaAbdominal >= 80)
);

//4//
do {
  ficha.AvaliacaoClinicaEBioquimica.Triglicerideos -= 5;
  document.write(
    `<p> Reduzindo triglicerídeos. Atual: ${
      ficha.AvaliacaoClinicaEBioquimica.Triglicerideos
    } </p>`,
  );
} while (ficha.AvaliacaoClinicaEBioquimica.Triglicerideos > 150);

//5//
do {
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas++;
  document.write(
    `<p> Porções de frutas:  ${
      ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas
    } </p> `,
  );
} while (ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.Frutas < 3);

//6//
do {
  ficha.HabitosDeVida.AtividadeFisica.Duracao++;
  document.write(
    `<p> Minutos de atividade física: ${
      ficha.HabitosDeVida.AtividadeFisica.Duracao
    } </p> `,
  );
} while (ficha.HabitosDeVida.AtividadeFisica.Duracao < 150);

//7//
do {
  ficha.AvaliacaoAntropometrica.PesoAtual -= 0.5;
  document.write(
    `<p> Peso atual (em kg): ${ficha.AvaliacaoAntropometrica.PesoAtual.toFixed(
      1,
    )} </p> `,
  );
} while (
  ficha.AvaliacaoAntropometrica.PesoAtual >
  ficha.AvaliacaoAntropometrica.PesoDesejado
);

// 8 //
do {
  ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria++;
  document.write(
    `<p>Frequência evacuatória diária ${ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria}</p>`,
  );
} while (ficha.HabitosDeVida.HabitoIntestinal.FrequenciaEvacuatoria < 1);

// 9 //
do {
  ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes++;
  document.write(
    `<p> Porções de verduras/legumes: ${ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes}</p>`,
  );
} while (ficha.AvaliacaoAlimentar.ChecklistDeConsumoNoDia.VerdurasELegumes < 2);

//10//
do {
  ficha.AvaliacaoClinicaEBioquimica.Colesterol -= 10;
  document.write(
    `<p> Colesterol total (em mg/dl): ${
      ficha.AvaliacaoClinicaEBioquimica.Colesterol
    } </p> `,
  );
} while (ficha.AvaliacaoClinicaEBioquimica.Colesterol > 200);
