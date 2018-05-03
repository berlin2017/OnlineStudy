const voice = 'data:image/png;base64,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'

const iconLogo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAA8FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////8kj/sjjvr///8hjfkahvQYhfIulPsdifYciPUUge8fi/gWg/E0l/olkPwrkvqJw/xSpvubzP0Rf+09nPwPfevv9/9lr/vl8v6Wyf1+vfyiz/13ufx7uvm52/1GoPrg7/693f5erPur1P1yt/yfzv3A3/5YqvsKd+fa7P7V6f7P5/7E4f6o0v2Rx/202P2w1/1utfwzlPY4lfRwtPrp9P7I4v76/P/0+f9RofHjcuduAAAAF3RSTlMA8YdD9eC5JwYDF9B8P+jnz3336RbRe2czR10AAAM/SURBVHherdjndtsgGIBhJNmOnb1aQHt575m992rv/26K5ESGBoRi+f3v53ygcyQDoKpoaqmo4EwpxZKqVQCvQ3UH/7Ad9fAbU94s4CUq7JVZZ20XL9nuGu1sKXjplK2FoxVwjgpasi4F50r5XF15F+dsY77jv3HuNiNnvZAfKqwTSE0B3gYtywrirNbTtVhSAajsiJ3zACWFUId3Qmi7ArQUB1GO57um0xBKGlCzODA02m03TVJBKcs8xGm6rm86tkgqgWIGBzquGzmG4+kCqQgUvnNEOw99n2Qahu3piC8pQO6gE4zHphk7HnHPuBKQO4+RPHYcx44GIjW4kNSZzO0RGUcnDiVJoQntHH3przEjlIBkntuF/0TxZ1KIdcJ3TNWlpIYEYp3qDcZCSQJNxA7pmJZSoQm1oxbntXEh3CfAOp6XSMEMf++jTs8khO4cO5FaPYylkgAa2oZjR5TYIdKUXh0XekeGGUs6cd6wqA4tXfOgOjJ9IhFIn3YY4H7ASK0FdMyDqtBwTSJ5Xv0P4zQQ6gskiw/pvh9B9Q92HkQa0lIv+IKqPMhCoRdB/zm15KW0aBakTRQgIhnGBWYaoM8eGMlKh1CovzJMp0u/UKiuWjAVQnDAQG+QeaVQvaNQDMU9Yc4a4uANNepfF4bpEDplpKvqQqpeJZO+uG0XwnQIjRjp5ovRda86mzu9Z9N12z6EAogv3X46nu04z714vc+GSaSmE1Z50BQljRlp8uWQn790yGoDzzYM03dNFPCgBlrEPruT2CE/Jb3gnhWrhDL0EQ/CF0JpiPTIcZukaWs+H6HsoENBgpdWjZH6ZCDitNuX0bOKpahbTEHZpJpjEufysgnD5CHqNcyBZNLYjBw3DAVDA5xV6jq+b4eQcViIlegdv2ekUUiPU+V818RSn5Gua6dJ9zP5nwieJA/gvBILyT/xckgmDXNArHSWDVLwSmZSQBHLpTs5VBQfIbrMP21ZJaDilUgq0HAm6VECaaCynU16SHW2K+lH0dOsO67KDsePF9ZnEJ5LDsdgc0XHdVDeyH+BsNIrDZK2n8fZ11Z+7UNa+7X0/qwBpvJejqsxtnX14KfMgbqeACu7PvwHDSP86WUi6KcAAAAASUVORK5CYII='

const iconMyComputer = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAflBMVEUAAAA/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nk/0Nn///9M09zB8PNc19/1/f2S5Or6/v6Z5usn1uDwAAAAIXRSTlMAqejS8ZP42GFY28atHhwUDwdLRwRkUt+2sS1jiIcvK2VTFHfiAAABxUlEQVR4Xq2YaXKjMBBGWxKbMWCMTbwkmcwnb5n7X3AqP8Y1VssyEv0O8KpaDb1RgK/qszE6AzJtms/qSPGsKqXhoFXVUwzDoYCXQg00kW1VIkBZbWkCGyZhog29olOYQNNSkLcMk8gWAck6x2Ty9dMkLxHBckVeuhJRlK3XskMku84TUYloahbXeokElu4750gid74XJLJ4SFKGRLL/06WQzJ7ubDCDt7vGyfXlfLVPuZ4vTtb/1Y2FY3EkTHTxv7LBA2f7fTvhCafbtz3jAeN/mau9IcAfe3XUgzdN1p4Q4GSto1E/lr5gGgRhmqInogpzNRhZTBM1PCo9X6OJvjBfg1/0LqF5p1xCk9NBQrMnI6ExpCU0mjIJTUGQ0EBIIxSU0BN7Ex7Gm/CDhGYv9DPI/Jq/6QjE12JeKEhjbmeAZkU0oU8BipX0hK4JjKzBTOrhvMHwqKIzB8Wab5JmYKNAisY4g4mD5YTHv3KOpt4KD23UIJm90EArM17LDfvyqwf1BtGYnhhdnbKWcdoSUdStzMoqvEBzFknrPKdtko4LnM3LjNWDwOGlHrciZ6AYVqPvKDX2FM+x+miMLoBsZ5qP4InsL7Z67Dd/zjBHAAAAAElFTkSuQmCC'

const iconRightArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAaUlEQVR4AWOgKzA2NjYH4jQgdgRiFmoanIaEPRGGU26wNZrhAbQ2nJ1qYU1Lww3RDA8DYu4hYbgOLQ1XQzM8Boj5aWV4GJ0Npjyc+ekfeZQnt4HPfYjyYigaiiiTB3VBbwjNro4Mgw0AAFVLYvlliZd8AAAAAElFTkSuQmCC'

const iconPosition = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAMAAACcJh9kAAAAt1BMVEUAAAAj2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K8j2K////8v2rMo2bFn5Mg93bjp+/fe+fP7/v2D6dIs2bJQ4L/r/fhw5su08uTi+vV2582y8eOT7NjE9OmK6tTB9en2/vw23LXw/Pqr8OFl48fU+PCc7dyH6dNS4L/K9uxB3boz27VU4MCK69U6aSTRAAAAGXRSTlMA77qVH6XXYFYG3PrGsH0vGhYMCjJ7g4IzUDiNwQAAAy1JREFUeF692mdz4jAQBmCXAAmkX66s5NoLvZPk/v/vukN4kJ0IyJ2kfT9l8oFnRlrbq9Ean3PVs62uOYD/z8DsWnbvyriYq/suqEr3/jz40AG16TyctJ6Ypdp7EmPXJuiIeS2wbmzQFfvmI/Zsgb5Yz23s2y3ozO231jJaoDdWczFt0B2bY9egP8fKfDQRNPOx1jqAkc4BewGcvDDtDkm7Y299wMr+i/AdTfv5V+uiaV22kIhL2UPUeoaNqNmGhahZRh9R6xsmomYagJgBqgb/rFF3PQrmYTgPRmuXatWcbEJamWSOLi3e+ORT/E2sRVsWRJhiqV6LF+RkFrFibbYiZ7KaKdVegyOQLsrtzHFm23LBtzF4Vah5xy3buY0idNzdcfM8ZRpd8YI4VTorqkpb1Fgl+EVa1dxCkbassSEIM6y5pRItLtqYNx754TSYjF/bXBGr0KJ6GWurIsdUdWnU/4oUaI7PsIIyzJ2SRqYZA2jBND+W17LmrkTkQ6Lmzmby2oQBOy7zcGHHtIm0Rg+Ay/Zs+lmbsr1zDzSV0fjvpM6hGgTJ2eamTHNltTV/dD0ijMdfAGsZjW9budfGYm28B0q+cTJawIAth5vhxJZpgaw2ZwD7fvlizd8Db0yby2oHgBVJKNZCVib8T1xNfiXfMFayXSWjM1WS8CrBfgLwn275N1d+8c2F+lZ+w/zijHR/TTfNPqmU12KkTkHcBeUcy9td0AYUaNQXdHihP/rY4aVUhQbR17rXCJRoTvCVzjxw1GiwJJdPHWQJijTIyaUTFckVnt/mpHlaTPanxaR5WiTpTJ0GGbkQFxRqUJ3HKlCq0eIcFlC1GiThaSxMQLEG0WktAuWak5/CKke9BnQlxlYUNGjgpSIs9UCLBu+iTuEdNGngih5rLZq4MEvQqMFG0Jbo0+B3u03WookXMwLtGmRT3nDp1yBhnUOQAIoGdOj7QwoSGkKQtQHuHRXu/Rvu3SLuvSnunTDufTfmXX4fdU7hB+4MBvp8ifELSXtBnQvCnXlCnedCnVXDncNDnTFEnZ/Enw3Fn3vFn+nFn1fGn8Xmc+Z9yTnzvnjO/A9MqmoN8DYNKQAAAABJRU5ErkJggg=='

const iconMap = 'data:image/png;base64,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'

const iconTip = 'data:image/png;base64,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'

const iconNoMessage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAicAAADICAMAAAAEA7GRAAAAOVBMVEUAAADb29vb29vb29vf39/b29vb29va2trb29vb29vX19fc3Nzc3Nzb29vc3Nzb29vb29vb29vb29vjDN4TAAAAEnRSTlMAP4C/EPDAMGCgIOCQcFCw0M9LJXNAAAAJHUlEQVR42uzd65KjIBAFYEAugjfk/R92a6rGYJLJRsFIY873a7d2ZnaqPIGmVWAXYUYxNU0T9mmaxgpuGHyDsZ9DnllwBlcmhyYcY2olg2sap3Aki1HlgqRQ4WjdwOBSYkqO1bUMLmOVEiQFXuFd+IPXehJ7aK19+MOMlfIVSBseTYKb9M6LDo8E1j7VG9XDPNHzA1ow3cMPxZBSOZGwlk1ZY6NKqZm8u5pKyM8VxxZzT7VMl5CS1KTMCEqljPp0rSl7rHuqt46Jf38N89fcCkGp0Domgn2OQFBqZk67fFwhKNVajSZass9yPiw6FLNVkbFssOzjpMWqp0pyPiUmkV39f1CNeNl6dg67qpmhEmNYDOwsMSioZSvhVIlJwKKWrUxzW+mwE0mPEqUqIvzykp0prrFGBuTdZh3l2LkMZp6K2FjDnk1gzVMNHn5N7Hw6DmVAW7NcqhJjv1MoZeswFn0QMc48GFBoW4YTz4qQHQaUGtyqE87KGDGg1GCKRWwhGkse+lz5eyzLiKbQQ6Grjw37Yjq80UNeF6uTYtriUx9sbJx3rKQOlSxxfUrH/qK/BbymSHySl1FtZkCSIVDFricerHhoGoisNHo8hkLaRGLaieNaz4AilbDakaPgmV/zTKFAIcwk3IJrfy6pGt98zd4dkyYUKIQllCd8Q5t/3P/o0UCg3QeviP3lybyhd9rt769ydFAIW+7Usu3CYsPD0Ypth3vGhM27uyc8LLK+5pmi0ciB/3yIJwI50VjwkOWWwZ5ATuzyLUDOckFbAjkRyAlZfP9i1CAn3yfm5ND1jktZ77RooJCVkpNpQwvXJ7R5OXJCVkoT1Kj3vVazvFuOnFyCSLk2RocQtHm/+7mWDDm5BJF2bRx379P08zXIyTUIQtcGOaELOQHkBC6fEyd6MVL4rYByTpaeWyOwsSwFB/VAJecj58flxIWo6x2DBNRqAjk0y6e/lSzdGH+XIdyxGFT2IpeT+/P+lMifA+Xtj5HFmLILuZw8HZvemdycxOlwReFxyJJ45lt4bXii2sw3AuNz2HcaDCmlxIdJRHZM8o+v1qs3zmTvnwNIYVH2rWJOjohJ1izWPTxH7cbe4/x0InJ2K3AqPMjaZu2vF4zd0CEoFOiMnNjwynDgFMg1glKeXp5PTKDCir77y6Etv1YhKKWJjG0tVrn4ubjcZ+XEvv5N5ITDjovJf/tbP57FZXMO5+r+t8FGi8OOExBZGPOnVOj00cm9iFgMCjbSKSln49b28VulTywiYhDa1/9O6N7298kpZBm3emrvL6fWaXft5ndDURtIbHT7rXoan1L3PgQ91jwFtTS2HRk2VB8eA0o5ksYGv/OGCthgQCnIU9gYdFk6+U0tlobB6QYKE0+zqeHvVPGTgr4XhfMy3MaD3yyFTH8rX37HcLuxj+toFFPfqS0+698KVFNFMfWlZPFG51Kd6GpObfhKpZcR4/agOtzkKceFkhVKPOZaY5NZ2mzRe/b9nnlvwmZ/5biC9+zjrGOxKSR1U7lSVi69M+WwKSR1TpU6kDxGVGCTFPpE+DWfHBQbfnlsplMDH6uEMw3hNusgJzUwqkRQ2t3vW0ic5lTWEBaTZCeJMZlwmlMtbFjMjp0ixsRL5KQaPizUKaN6jInaHkyDGzylSR9uus9fhz7GxGDz0JrEoHy+nJVNuGmxyWxdYlA+Xc7y1FfLR+SEgBiUj7bcZB/uYoJDv6rTnxCUsXuICQ6brM+oVkEx7Hi8CSF9m4oZz58QIfuEy5iWkuBN4jOalkFxxn8oKLKdw5qVu0c7tE8IkR8JCrcqexc3ixe9KJH64KDwoQkPdMoPVuXfSYM1m7rRleP3hBBNF6KsWwMtyhNq7P7l8dg3KryRd65BU/7VRcgLCv/X3r2suwrCUAAOFERERdf7P+yZtMdLba2tbMVv/cNOOjCCQBIiPla437oaWKHz8BuyQ8qwIUqUfOnGKq8z8p8eCrob1v1+O1cLVhefkv9sCavxqdjK94zlV+xJRayXlJqIj3RayU8ih5OzMt3qNorpsSYUdaOM/Eiz0fB5DYHSm0/CpNC6URNm7yxJy8blJ+Ts+0VPj4FvjaRSAtw7OTNn333L+j+6ErQG+BF7biUe3JuiH9tKOlWPh46zzlnVw0nPy7Gmq2SdU98Oabx+JwfFq5VGv+Utby0QWtlOMUzyYOxye5RmS5i4e6iZ7fMewyQTanHmMZuapsT/FWQMk8uql2YevWmlWuDB+kapL8Kk4z7s6XW4U982dfN4rb/VbjVMPFc65+eeZx6/bX/U4b2g5ZmzvJA2L3reRs1sfYClxXu9Ypjkr8OdmwZO2FLusaKcnx0xTLLjML2rwn7xBLXdFCg3hkmG9OScp/zq1h5TW7ylZKAZJlkK4+5H/bePsPUBr1kjD45hkieFu5uI+ykZRKlGjxUL7XlMYF5SpuphY83v+wyNxoOa/1kUysuoFT3uqt2zF27zowJur2WnxZ3d/11vJgOKCWDFeb4iplrZTzEeUGqw73TGjMVYkB250VymAPZNylm53sDk98tph1nH8og4U3G62bGnYa3NWSd7JgCTI8EEXyiRs07+nE1WcFXijrPOBZTpCq4eYxXvxLgCZVNspw97KJx1LsJoi9DI/kzgrEOfbvjypgNa45lMQBvOpAOPdegt54vCs3cFERERERER/aFSD9rJr6957yQdo19pmFd9lIixemiqtaKUVCqLAbMNzqHFlBvSB1YoSSTiGTuDHkwvPn2NdVoSKTDFfIMTKBfHkwbrWkkkYgELBA/WLQ3rpsOaTlJxFjPs5nc80xT/xXL262spVx5VXbxQ8zOWiIiIiIiIDtLG2yGYLpuVBn+HFaT5sjiMUD5wHCadZCTgKEEoH87iGJa1xlmpGn2Ehkd/REREREREdD0qYAe9kzHjMWPZ1DprlcUuglm8S4odAS+iwU6UjLCA8Go0dtLKCAvDrqbCPqxZqzhlmlPWSpvgjNAUTHK6HPU7J3OVmmLqChERERHR1amEKpkxaoob55lQFilFI2MlE6HzZCzSqmXE4ZnlLkYGFBLrZUSDZ7Z5UkiskJGGcZKrDmmVa4klnVAGjLdIJzQy4SJmIiu11v0DptL+HQbF4M8AAAAASUVORK5CYII='

const iconFingerGuess = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAMAAADUbMsyAAAAvVBMVEUAAAD9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX9qkX////9rEr/7db9u2v9sVT//vv+zpT+y43/8uP+2Kr+37j9vnD9tFv+wnr//Pj+6c7/8N7+x4T9tV7/+vT/9uz+yYj+xYD9uWX9sFD/9Ob+0pz9wHT/9uv+5MT+4r/+5sj+1aL/+O7QRyLUAAAAHHRSTlMA7ATkyLKjJ/rV99vBmYRlW0pAKiIgGQzU+39+u+G0ngAAAi1JREFUeF7t2edW20AQhmFkjGXRiwGTfLPqxb1Xyv1fVsgcsgJichbv6F/eC3h+aM7R2Z09+NTtRaPuHMO0Y6feuLg9+Ee1y1Ps0+ll7Svy6gT7dnK1U7xvwKbG/d9kqw272q3PpHsI2w7dj+Qdk7bo3YeB1yFR/f34zyHTeUm6TcjUdLV5BKmO/pA3kOvmzTyDXGdvQ3cgl1Nj8xqSXbP5A5L9LKcuPPk2JPPYdCCZw2YTkjXZhGxfmeHIrNDYTDZkmj8yM4f0jSYLI9On7/RsZPaIpjAq2BANjEwiUjBrSNQzNWFYh4j2NP+bQXcubKo+EeUi5jx7TBhI6HddAXNKr2UAkLG5EjCX9NpYAcjZjAXMMUtrAE9sDgXMvv5P+GLfc8WSDyBlMxAwA5YiBUzYHFmb+oN2gYjN0NrUo8mgiIOEGTPlo8PkWMScsxWFazY3SsLEC2M94ijyE2VvZs+zooifSJcGlqYuSDUazazNIFnFARAOSrSwMxcpM/0Q80ijS2Vl+sTRQCEnXWxjFppJsCadb2NmmnlEQGWh7b+OyxFTWWFhlsPuqiWVzSTMVG3pXVMJc5uSpbkozd0NwQWmZo8oD/WMdtdlYLEl6lVwTvblz/M0MzKRTIzFSQwTk1McADXaUcfgziVaFffNyu7FHiTzqtozyO9D5Pc2Fe2X5Pdg8vu6ivaKnPsAmR7cSve08vtk+b23/H6+rOXBLq9V/XuH/LuM/PuR/DvXL8JHuMmJxx/lAAAAAElFTkSuQmCC'

const iconAlbum = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAMAAACcJh9kAAAAxlBMVEUAAAAYahIcehMdixYgnBcjrRkjuRsmwxwnxhscgxciqhkZbRIglBcYaBMgkRYadxQluxoWZREejRcYZhIZZBMhoRoXaRMZbhQflxcYahIdghUchRUNxwMbehNT10vo+uf///914G/K88f2/fQpzh/S9dAVygz5/vnq++mk6qBn3GE90jUfyxW777klzRzF8sJV2E3f+N2q66cXyhGI5IN+4Xjl+eQsziPz/PJh21l24HGr7KgpziJ84Xii6p/N9MschRUZbhTe9BiXAAAAQnRSTlMAOJnR7fr+//+9+VbjKt6Q/gzVFxTyMVrnPrvC/53/////////////////////////////////////////////w1zyw7HKAAACh0lEQVR4AbzNg4FEURAEwH7ub+OUf5hnrTlTCRR2Get8iInXSzF4Zw1OMlnOe8mz42FRJt5TKgscUtW8v7rCXk1LCW2DXV1PKX2HLYOnHD9gwzhR0jTin85Tlu/wp6e0Hr8aymvwbW4pr53xpaaGGp8W6ljwYaWOFe9Moo70AOCRWp4A5Pz1fHf8LwCGahsfYBW3FzjFzcErbh5BcQtoFbcIKm5JdeMbNeaB2zAMA8CPELI1vPfMTv7/q4LqrtlhixHSw2wPwMWb0mPVRBB+IRD3qwXhggCA/lmBcK2FBFZQPyvwVrNme00qHW5AK7m+ZqJwM5FZW8PY9ly8riZDJ+S6mnKrqXW1xK2WrKuFjjDX0iwvSoCyyLOAr1bVAHUVfqFp4QNtw1Wr8a86/EQn4Aui46kRJ7YfYMHQ36k2AsnIdyaJmJmqOdFdNe2onMNdYqoPp/Gl1Sfv/zJg6dmfgC62ut2HH9AHQOKOuybot+gREMFca6w8LMXBioa31qIzeim0QdOy1lLrekqdrEo5axmqM+3O6DLOWo7qQrsLupyzVqCqaFehKzhrJaqZdjO6krMWo0p++lxz1sBrze+Z9HuX+H0C/D7dqXUn/jeX/7cy/xeH52t6AUT8z0lhMQV9uFVO/FMQPeElM8+ER+BheiXoY1gQ9yFfzdeqg4Z/RfUz6fV1tXhlWC064nWVr/3uYDzy7kzsa+fJ/64aIm/bdgxv8klDZRR71LZR2wC92rEBQAAUxcAHQPVb27D/UkqVBi5r5ObJPir73/BbpN/UPmH8u7POqoE6hT3J5gwG9yU5lJ2hLsiaJ+q5qFWzDo8aQ+snvQ317tWbXu+VvcW+nHm9cuZ148xPObZ3zYz2ncAAAAAASUVORK5CYII='

const iconCapture = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAMAAADUbMsyAAAAwFBMVEUAAAA6lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf86lf9Amf9HnP+Vxv/f7v/////c7P+SxP89l/9tsf9dqP9Qof/U6P9Knv/A3v+52v/W6v+Lwf+v1P/T5//5/P93tv9iq//2+v/p8/90tf+n0P+mz/9Uo/8hBsaDAAAAJHRSTlMAOHSrze33/+uhZSAZg+D+xFsEDYrbSEHlpNQndZH6sSqZe+740wbOAAABh0lEQVR4Ae3Z5ZYCMQyGYTy4uzvB3e3+r2qlXdx6mG99nt+cF4dOYjhjNJktVhupstktDqfLcIfb46Un+PyB4I1iKGyjZ0WiV5OxOGmRCF0mTT7SJnnxsoZJs3jqNJkmgLj7OBn1EYI/eEiG4oThOTQzBJLdv6TuLKHkDu85jC8vk8E44RRk00hAVvnWFwkpJppmQiqKZpIk5DtvJaSkaGYJqSSaBJX9hCbpzWvKlevKzzbL1RrfUm806VirrdTs1Pmebo/2mn3mlkKzKZN3oodHOmDmoUJzxI+M6MOY3yk0J/zIhKQqqzan/MiUhBkrN/khWZkv4M3ektHN5oThzTHjm6w39abe1Js/7Hep2cc3qVzHN6mzZOD/5oKE9oLx/+8rFrDnEHlT8HlpLV8J7LluwDzRfv6sNunYatNWPidvr+qUf/81gt7Mftp1Mf76HT9n+Kx5CH5ug58v4edgnzevw88V8fNP/JwWP0/+3Lk3fj4vpfF7BPy+A7eX+fz9kWRMa99zvQLG5nYY84pjpgAAAABJRU5ErkJggg=='

const iconVoiceWhite = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAA/37AQX6+PY22I5+OqYNnz6imWArKBEJbVtWRNAk8u7AvLiwd08yLx4Y6NPFqpyUad6EY0rizHLUcwrKAAAEPklEQVR4Xu2a2VIjOwyGf9tydpIQYBIIYQmQDMuwDjB6/xc7JaXKN+fInuo+vmBq+rZT/UXbL7Xc+OOuvxe5+gwHEFVGOGAPqGqMIC55WJVCuJ0xe76O9SgOG2YffODLRTUKYf4shnCHf0wqUnDCHJQS61EiTrs7ylXF6Ef0z3eUMUD1KNsLoQQewqEe5Ugo3vNPxIqUfpc9e+5+r2rLu2Ry4IcIqkj59b+FxTlb7ae7sJwitu4bFsVhMeDAgQcLUCuXYP8Ezg6+17C8tTNlPvR8iGhSRhwkw761CMvi5EOk8MSiEOhTHTZuDHFYMneF8m5RHPZYq6XfmEI43pXCuekOh5mact0Cghf2QhlYncPhW09+0sYUh9FObR8NCCKe1ZRZU0gqOA68RLRM6YopvbPmFAf3qVn6MQcZlKmacoOI5pSjrgb/2YxKn8WUFYHa6aBgjgwKYa227rcoSAJ+qD+mBiTiRO8PW/gr+SMY3YlwdyH3B7/TVxwB2dAemFF55OCZ9+DKyQoyY69t495IsIjD38uvCBxNbMpYTLHkmHDbYy/SQgW/x5FdtA77msVX5lMuxV/3kxyFgNMHZj427CW4B63qW8tfbwLx23xQnlh+1ROxNZ/C3mosEUv2PuRHMMIvYQSVQbttaH7Z+lWqFNJ/yt7KQkJ8Ze+tEYuw+ChHngjrbBt1GKs/7wwI1nJ7FUFFGfR8fmeF9kYglj45HAjkYpKFIOIpVwoOmxRaY2rpeO4WeoqGlguh7fCbBTnWHC70YEIciL8+neH1yUUuvTSHPb8niD122FVLWLwKZGxBThWyzEDKbiW4VUpSq47+NWtabg1bAyLyFPgSoP+EfA9i6HER8pLXn3VLSJqdd6Oz2YNNHXboe4G8FCAOU62nuRH4+MBexc3qBQLRmJRTeGWq071AphbkPWVXuRjtp5z1bJ3VBuw98ylcWVZUN6xCSE43ZrM0z2QEspME0kpw+69GDJNI56T+qiD1Uw52/yVcC+Q1ZiG4KTWtQZrfrNuB10CWUWq//dR+MzPRQctBYpQGCbPbaME3H4kAWuVHolHqm6Xhbtp0uCNcJbUojamLxmPq3XmKe4uBu5MfuJdq6Aix5qvDLIWk3kvQ/F7uvy5ArV/nnpRhe+u5hSFR1SAzVDmVJB1VGjO0s2aWgA5bTpLTNCBxpYa8WiOo0yahudWYoSXCgTeIsNtZ8mYzxrMwOjwrLXDGTRkEaUacX0WdtVtFKcN79tw7Ki3VHps761A85ZmXhfVgm50aoiw6Pb/A1Vl0ppWtMiqubNPymSzGHif9rb5Gj6BqBwKaWdz6QKCsnNyRPlOPsWFOO+NajP2gC/TOtiJje84hvSdWPWgMPKzpq94u6Ne1DjPJYRMqH/4S8JN3jNWkGmN+wOyVcQdX+9B/LXZU/nxhTHBf+EOMpJl9wH3xj2NSrXzF6+/1D0JGnT/OeHIgAAAAAElFTkSuQmCC'

const iconVoiceGrey = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAt1BMVEUAAADn5+fb29vb29vf39/b29vb29vb29vb29va2trb29vb29vc3NzZ2dnb29vb29vb29vc3Nzb29vc3Nzc3Nzb29vc3Nzb29va2trb29vb29vc3Nzc3Nzb29vb29vb29vb29vb29vc3Nzc3Nzc3Nzb29vc3Nzb29vc3Nzb29vc3Nzb29vc3Nzc3Nzb29vb29vb29vb29vb29vd3d3p6eno6Ojl5eXh4eHj4+Pf39/n5+fr6+vu7u7GUdEOAAAAMnRSTlMAA/37BvegOTUOpW09CvHYzmArHZqRTTAou1tWFOrAl4yARtOvZSXdxap9d+K3hXRCsxZcSw4AAARdSURBVGje7VrJUuMwECWyneDsBJKQPWSBLCxBcmzZ4f+/a7rlqdKBaYkqoQNTqDhQlq3n3l4vztXv+v9W5dOVHwkBGDXPSAgxz/qeUW6rIuXJJvSGAgcPxJkxHiTzlkdZ4n7OGefBeRf71NiY54iS7LxqbBWVKC8erR9e1dqZQqnrix5QhrMSZelNFETpKVlYsfWKUosE40wEQ68oA8FBFLkO9UUPKI1CmaXvLkqlQnty9RyAMNnKFaUCf+RWqyPBLNlTyxWiOTagXHOOCnt1EyVesuLGgHJQCovuHVBa4+cEdD42HNGVDKiybgWhdTX5yALORD6A/4lbahyXuHYQpZFhKOTtexqlDgoLio2LVRoSLSs7MSntfcRxOYgCli0Dbk+LskgCsErVRZQy4Fg6wUNoUUT06CJKpZtiwD3HxrgPkqMBxI7SiwTNUCoiBfJk1y3o31TABT3yVUcgKxdNt7Cfp4w2LVwdp8wpR2qG4ozMTtO2AKt1wi8dZjHtHSnKXim0ZhelYrI9npHPptT+Tcq0fxkhepAVTNzBUpKObyPQV7GxihE+iCq9e8oxIEdG18hntty1Wp950qATx1oyiOpb6iVeL4Gdv+5kFjCBuYc6JQF9SUgsRE7ANJxaSrC3TJXpGxKkpqJ+QZ1yH8D2xVa2PCDZckF6YfiUQyisqUNaz7CdasuT1KDTKOVfaBTa8izrqodtoSDapGmPCd7QpIxyB9v5LCYB9G1kKGAPl3N6O7x6uKCgjzaQpuCMpI7KX9O+UtuNM5b41hwcdjLGJKnWGEjQ8A4TdE+h61WSBbVaKf851ymQFSaubGIDsai10pWMpe+ksvknk9FqpZPGHEDknHp4iM+eG3aQwmi7UQogOxIE/eILIIcL3kjWijtU14sheWryshhetKeU863B+Yq9m02UC5vYaZaDC1dNscq1d5mDsWpKfsFlSYHcSIyTE27baWVLnXISdNOOtRlSG3bbljrRTJANRZAnCmSpgmzqSPXVxEj17/B49mSpvI6pTlq0W3RCk9ekIwuG1F0IGQeYfmm3wG3HQuJgLiQGuQ54c0lkuqmrSyKSLTBvuhR3TUtx95IyxRY+y1Qs69U7+Cy4JxIL7gP859w6LExB5NRq6akD3c/FQJ7cdVa0U2wARYRRWwsnQY6qj8JGnfYtt9GayqzmFnvIub1ltARQt5zOxXSSUG7x4KCtsulkckAK8hgJszbtq1+U43J6gNNXA5y6C4YqxtQoihbEcRTVTxFDRD1akKrTUA3Lg48cOIvLCY1Rw9zvNB4M1aBTbn0NOvXIFtMMXaUja6ls52/4jKymY8TnGF12Qp8fBOoqUG2s5TrSY7qG8bLCsshmUrOaB4xmUH5uokPEHWPYzpnqSTxiXLc9fwLEQiwqMeiZjTvGIMgR4+zz4+9WCIXRjb1hTBcZLzGmvjDwo3+hPvqPWr4w9M8X9gSrfecPMZb/xPhZPykhi/OfCvO7vnn9AfbUnwflIPH0AAAAAElFTkSuQmCC'

module.exports = {
  voice,
  iconLogo,
  iconMyComputer,
  iconRightArrow,
  iconPosition,
  iconMap,
  iconTip,
  iconNoMessage,
  iconFingerGuess,
  iconAlbum,
  iconCapture,
  iconVoiceWhite,
  iconVoiceGrey
}