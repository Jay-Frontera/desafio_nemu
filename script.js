const firstRedirect = new URL("https://www.lp.nemu.com.br/?utm_source=fb&utm_campaign=adset01%7C123&utm_medium=campanha01%7C1234&utm_content=ad%7C1234")

document.getElementById("myForm")
  .addEventListener("submit", function (event) {
    event.preventDefault()

    const link = new URL('http://localhost:5500/redirect.html')

    link.search = firstRedirect.search

    link.searchParams.set('redirect', 'https://suasaudemental.com.br/')

    window.location.href = link.href
  })
