export default function PremiumPsychologistLanding() {
  const benefits = [
    "Конфиденциальная работа в бережном формате",
    "Индивидуальная стратегия вместо шаблонных советов",
    "Глубокая терапия для взрослых с высоким уровнем ответственности",
    "Спокойное сопровождение в сложные периоды жизни и карьеры",
  ];

  const cases = [
    "Тревога, внутреннее напряжение, эмоциональное выгорание",
    "Сложности в отношениях, повторяющиеся сценарии, границы",
    "Кризисы смысла, усталость от роли «сильного человека»",
    "Высокая нагрузка, давление решений, невозможность остановиться",
  ];

  const steps = [
    {
      title: "Первая встреча",
      text: "Знакомимся, определяем запрос, проясняем контекст и намечаем рабочую траекторию.",
    },
    {
      title: "Глубокая работа",
      text: "Исследуем причины, внутренние конфликты, повторяющиеся паттерны и устойчивые точки напряжения.",
    },
    {
      title: "Изменения в жизни",
      text: "Формируем более устойчивое состояние, новые опоры и ясные способы действовать по-другому.",
    },
  ];

  const faq = [
    {
      q: "Сколько длится одна сессия?",
      a: "50–60 минут. Для некоторых запросов возможен расширенный формат 80–90 минут по предварительному согласованию.",
    },
    {
      q: "Вы работаете только онлайн?",
      a: "Базовый формат — онлайн. При необходимости можно предусмотреть очные встречи, если это уместно и доступно по локации.",
    },
    {
      q: "С какими клиентами работа особенно эффективна?",
      a: "Со взрослыми людьми, которым важны глубина, деликатность, интеллектуальная честность и реальные изменения, а не быстрые «волшебные техники».",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1f1a17]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,155,109,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(70,53,38,0.12),transparent_30%)]" />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <header className="flex items-center justify-between py-4">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-[#8a7357]">Частная психологическая практика</div>
              <div className="mt-2 text-lg font-light">Андрей Курпатов</div>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-[#b79b6d] px-5 py-3 text-sm hover:bg-[#1f1a17] hover:text-white transition"
            >
              Записаться на встречу
            </a>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div>
              <div className="inline-flex items-center rounded-full border border-[#c9b79b] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#7b6549] backdrop-blur">
                Премиальный формат индивидуальной терапии
              </div>
              <h1 className="mt-8 text-5xl lg:text-7xl leading-[0.96] font-light tracking-tight max-w-2xl">
                Пространство, где можно перестать держать всё на себе
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4c4034]">
                Психологическая работа для взрослых людей, которые привыкли справляться, но больше не хотят жить в постоянном внутреннем напряжении. Без давления, без инфантильных формул, без обесценивания сложности вашей жизни.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-[#1f1a17] px-7 py-4 text-sm text-white hover:opacity-90 transition shadow-lg"
                >
                  Выбрать время консультации
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-[#b79b6d] px-7 py-4 text-sm hover:bg-white/70 transition"
                >
                  О подходе и формате
                </a>
              </div>
              <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
                <div>
                  <div className="text-3xl font-light">20+</div>
                  <div className="mt-2 text-sm text-[#6c5a48]">лет частной практики</div>
                </div>
                <div>
                  <div className="text-3xl font-light">1:1</div>
                  <div className="mt-2 text-sm text-[#6c5a48]">только индивидуальная работа</div>
                </div>
                <div>
                  <div className="text-3xl font-light">100%</div>
                  <div className="mt-2 text-sm text-[#6c5a48]">конфиденциальность и деликатность</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="rounded-[2rem] border border-[#d7cbb8] bg-white/70 p-5 shadow-2xl backdrop-blur">
                <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(160deg,#dfd2c0_0%,#c5ae8b_38%,#7e664c_100%)] flex items-end p-8">
                  <div className="rounded-[1.5rem] bg-black/20 p-6 w-full backdrop-blur-sm border border-white/20 text-white">
                    <div className="text-sm uppercase tracking-[0.25em] text-white/80">Индивидуальная сессия</div>
                    <div className="mt-3 text-3xl font-light">Глубина, ясность, опора</div>
                    <p className="mt-4 text-sm leading-7 text-white/90">
                      Формат для тех, кому нужен не потоковый специалист, а внимательная профессиональная работа с нюансами именно вашей истории.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div className="rounded-[2rem] bg-[#1f1a17] text-white p-8 lg:p-12 shadow-xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[#d2ba94]">Для кого эта работа</div>
            <h2 className="mt-6 text-3xl lg:text-5xl font-light leading-tight">
              Когда внешне всё под контролем, а внутри становится всё тяжелее
            </h2>
            <div className="mt-8 grid gap-4">
              {cases.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-white/85">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#ddd0bc] bg-[#fbf8f3] p-8 lg:p-12">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8a7357]">Что вы получаете</div>
            <h2 className="mt-6 text-3xl lg:text-4xl font-light leading-tight">
              Не просто поддержку, а продуманную профессиональную работу
            </h2>
            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#b79b6d] shrink-0" />
                  <div className="text-sm leading-7 text-[#43382f]">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-[2rem] border border-[#ddd0bc] bg-white p-8 lg:p-12 shadow-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8a7357]">О специалисте</div>
            <h2 className="mt-6 text-3xl lg:text-5xl font-light leading-tight">Опытный психолог с уважением к сложности человека</h2>
            <p className="mt-8 text-base leading-8 text-[#4d4136]">
              Здесь можно разместить сильное позиционирование: специализацию, годы практики, базовое образование, дополнительные подходы, категории запросов, с которыми вы работаете глубоко и системно. В премиальном лендинге важно не перечислить всё подряд, а показать зрелость, границы и профессиональный вес.
            </p>
            <p className="mt-6 text-base leading-8 text-[#4d4136]">
              Хорошо работает спокойная формулировка без штампов: не «помогаю стать лучшей версией себя», а понятное объяснение, как именно устроена работа, кому она подходит и за счёт чего даёт результат.
            </p>
          </div>

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-[2rem] border border-[#ddd0bc] bg-[#fbf8f3] p-8 shadow-sm">
                <div className="text-sm text-[#8a7357]">0{index + 1}</div>
                <div className="mt-3 text-2xl font-light">{step.title}</div>
                <p className="mt-4 text-sm leading-7 text-[#4d4136]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,#1f1a17_0%,#3a2d23_100%)] px-8 py-12 lg:px-14 lg:py-16 text-white shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-[#d2ba94]">Формат и стоимость</div>
              <h2 className="mt-6 text-3xl lg:text-5xl font-light leading-tight">
                Высокий уровень внимания, который не может стоить дёшево
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
                Премиальный лендинг должен не оправдывать цену, а объяснять ценность: ограниченное число клиентов в работе, подготовка к встречам, глубина анализа, устойчивый формат взаимодействия, бережность и конфиденциальность.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white/10 border border-white/10 p-8 min-w-[280px] backdrop-blur">
              <div className="text-sm uppercase tracking-[0.24em] text-white/70">Индивидуальная сессия</div>
              <div className="mt-5 text-5xl font-light">от 15 000 ₽</div>
              <div className="mt-3 text-sm text-white/75">50–60 минут, онлайн</div>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm text-[#1f1a17] hover:opacity-90 transition"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div className="text-xs uppercase tracking-[0.28em] text-[#8a7357]">Частые вопросы</div>
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {faq.map((item) => (
            <div key={item.q} className="rounded-[2rem] border border-[#ddd0bc] bg-white p-8 shadow-sm">
              <div className="text-xl font-light leading-8">{item.q}</div>
              <p className="mt-4 text-sm leading-7 text-[#4d4136]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-10 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-stretch">
          <div className="rounded-[2rem] border border-[#ddd0bc] bg-[#fbf8f3] p-8 lg:p-12">
            <div className="text-xs uppercase tracking-[0.28em] text-[#8a7357]">Контакт</div>
            <h2 className="mt-6 text-3xl lg:text-5xl font-light leading-tight">Спокойный первый шаг к более устойчивому состоянию</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4d4136]">
              Оставьте заявку удобным способом. Можно добавить Telegram, WhatsApp, email, форму записи или кнопку на календарь. Чем дороже позиционирование, тем важнее ощущение аккуратности, приватности и отсутствия давления в CTA.
              </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 lg:p-10 border border-[#ddd0bc] shadow-sm">
            <div className="space-y-5">
              <input className="w-full rounded-2xl border border-[#d8cab7] px-5 py-4 outline-none focus:border-[#a98b62]" placeholder="Ваше имя" />
              <input className="w-full rounded-2xl border border-[#d8cab7] px-5 py-4 outline-none focus:border-[#a98b62]" placeholder="Телефон или Telegram" />
              <textarea className="w-full min-h-[140px] rounded-2xl border border-[#d8cab7] px-5 py-4 outline-none focus:border-[#a98b62]" placeholder="Коротко опишите запрос" />
              <button className="w-full rounded-full bg-[#1f1a17] px-6 py-4 text-sm text-white hover:opacity-90 transition">
                Отправить заявку
              </button>
              <p className="text-xs leading-6 text-[#7b6c5d]">
                Нажимая кнопку, пользователь подтверждает согласие на обработку персональных данных. Здесь же можно добавить тонкий юридический блок и ссылку на политику конфиденциальности.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

