if (typeof responsiveVoice !== 'undefined') {
  console.log('ResponsiveVoice already loaded')
  console.log(responsiveVoice)
} else {
  var ResponsiveVoice = function () {
    var self = this
    self.version = 3
    console.log('ResponsiveVoice r' + self.version)

    var responsivevoices = [
      { name: 'UK English Female', voiceIDs: [3, 5, 1, 6, 7, 8] },
      { name: 'UK English Male', voiceIDs: [0, 4, 2, 6, 7, 8] },
      { name: 'US English Female', voiceIDs: [39, 40, 41, 42, 43, 44] },
      { name: 'Spanish Female', voiceIDs: [19, 16, 17, 18, 20, 15] },
      { name: 'French Female', voiceIDs: [21, 22, 23, 26] },
      { name: 'Deutsch Female', voiceIDs: [27, 28, 29, 30, 31, 32] },
      { name: 'Italian Female', voiceIDs: [33, 34, 35, 36, 37, 38] },
      { name: 'Greek Female', voiceIDs: [62, 63, 64] },
      { name: 'Hungarian Female', voiceIDs: [9, 10, 11] },
      { name: 'Russian Female', voiceIDs: [47, 48, 49] },
      { name: 'Dutch Female', voiceIDs: [45] },
      { name: 'Swedish Female', voiceIDs: [65] },
      { name: 'Japanese Female', voiceIDs: [50, 51, 52, 53] },
      { name: 'Korean Female', voiceIDs: [54, 55, 56, 57] },
      { name: 'Chinese Female', voiceIDs: [58, 59, 60, 61] },
      { name: 'Hindi Female', voiceIDs: [66, 67] },
      { name: 'Serbian Male', voiceIDs: [12] },
      { name: 'Croatian Male', voiceIDs: [13] },
      { name: 'Bosnian Male', voiceIDs: [14] },
      { name: 'Romanian Male', voiceIDs: [46] },
      { name: 'Fallback UK Female', voiceIDs: [8] }

    ]

    var voicecollection = [
      { name: 'Google UK English Male' },
      { name: 'Agnes' },
      { name: 'Daniel Compact' },

      { name: 'Google UK English Female' },
      { name: 'en-GB', rate: 0.25, pitch: 1 },
      { name: 'en-AU', rate: 0.25, pitch: 1 },

      { name: 'inglés Reino Unido' },
      { name: 'English United Kingdom' },
      { name: 'Fallback en-GB Female', lang: 'en-GB', fallbackvoice: true },

      { name: 'Eszter Compact' },
      { name: 'hu-HU', rate: 0.4 },
      { name: 'Fallback Hungarian', lang: 'hu', fallbackvoice: true },

      { name: 'Fallback Serbian', lang: 'sr', fallbackvoice: true },

      { name: 'Fallback Croatian', lang: 'hr', fallbackvoice: true },

      { name: 'Fallback Bosnian', lang: 'bs', fallbackvoice: true },

      { name: 'Fallback Spanish', lang: 'es', fallbackvoice: true },
      { name: 'Spanish Spain' },
      { name: 'español España' },
      { name: 'Diego Compact', rate: 0.3 },
      { name: 'Google Español' },
      { name: 'es-ES', rate: 0.20 },

      { name: 'Google Français' },
      { name: 'French France' },
      { name: 'francés Francia' },
      { name: 'Virginie Compact', rate: 0.5 },
      { name: 'fr-FR', rate: 0.25 },
      { name: 'Fallback French', lang: 'fr', fallbackvoice: true },

      { name: 'Google Deutsch' },
      { name: 'German Germany' },
      { name: 'alemán Alemania' },
      { name: 'Yannick Compact', rate: 0.5 },
      { name: 'de-DE', rate: 0.25 },
      { name: 'Fallback Deutsch', lang: 'de', fallbackvoice: true },

      { name: 'Google Italiano' },
      { name: 'Italian Italy' },
      { name: 'italiano Italia' },
      { name: 'Paolo Compact', rate: 0.5 },
      { name: 'it-IT', rate: 0.25 },
      { name: 'Fallback Italian', lang: 'it', fallbackvoice: true },

      { name: 'Google US English', timerSpeed: 1 },
      { name: 'English United States' },
      { name: 'inglés Estados Unidos' },
      { name: 'Vicki' },
      { name: 'en-US', rate: 0.2, pitch: 1, timerSpeed: 1.3 },
      { name: 'Fallback English', lang: 'en-US', fallbackvoice: true, timerSpeed: 0 },
      { name: 'Fallback Dutch', lang: 'nl', fallbackvoice: true, timerSpeed: 0 },

      { name: 'Fallback Romanian', lang: 'ro', fallbackvoice: true },

      { name: 'Milena Compact' },
      { name: 'ru-RU', rate: 0.25 },
      { name: 'Fallback Russian', lang: 'ru', fallbackvoice: true },

      { name: 'Google 日本人', timerSpeed: 1 },
      { name: 'Kyoko Compact' },
      { name: 'ja-JP', rate: 0.25 },
      { name: 'Fallback Japanese', lang: 'ja', fallbackvoice: true },

      { name: 'Google 한국의', timerSpeed: 1 },
      { name: 'Narae Compact' },
      { name: 'ko-KR', rate: 0.25 },
      { name: 'Fallback Korean', lang: 'ko', fallbackvoice: true },

      { name: 'Google 中国的', timerSpeed: 1 },
      { name: 'Ting-Ting Compact' },
      { name: 'zh-CN', rate: 0.25 },
      { name: 'Fallback Chinese', lang: 'zh-CN', fallbackvoice: true },

      { name: 'Alexandros Compact' },
      { name: 'el-GR', rate: 0.25 },
      { name: 'Fallback Greek', lang: 'el', fallbackvoice: true },

      { name: 'Fallback Swedish', lang: 'sv', fallbackvoice: true },

      { name: 'hi-IN', rate: 0.25 },
      { name: 'Fallback Hindi', lang: 'hi', fallbackvoice: true }

    ]

    self.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)

    var cache_ios_voices = [{ name: 'he-IL', voiceURI: 'he-IL', lang: 'he-IL' }, { name: 'th-TH', voiceURI: 'th-TH', lang: 'th-TH' }, { name: 'pt-BR', voiceURI: 'pt-BR', lang: 'pt-BR' }, { name: 'sk-SK', voiceURI: 'sk-SK', lang: 'sk-SK' }, { name: 'fr-CA', voiceURI: 'fr-CA', lang: 'fr-CA' }, { name: 'ro-RO', voiceURI: 'ro-RO', lang: 'ro-RO' }, { name: 'no-NO', voiceURI: 'no-NO', lang: 'no-NO' }, { name: 'fi-FI', voiceURI: 'fi-FI', lang: 'fi-FI' }, { name: 'pl-PL', voiceURI: 'pl-PL', lang: 'pl-PL' }, { name: 'de-DE', voiceURI: 'de-DE', lang: 'de-DE' }, { name: 'nl-NL', voiceURI: 'nl-NL', lang: 'nl-NL' }, { name: 'id-ID', voiceURI: 'id-ID', lang: 'id-ID' }, { name: 'tr-TR', voiceURI: 'tr-TR', lang: 'tr-TR' }, { name: 'it-IT', voiceURI: 'it-IT', lang: 'it-IT' }, { name: 'pt-PT', voiceURI: 'pt-PT', lang: 'pt-PT' }, { name: 'fr-FR', voiceURI: 'fr-FR', lang: 'fr-FR' }, { name: 'ru-RU', voiceURI: 'ru-RU', lang: 'ru-RU' }, { name: 'es-MX', voiceURI: 'es-MX', lang: 'es-MX' }, { name: 'zh-HK', voiceURI: 'zh-HK', lang: 'zh-HK' }, { name: 'sv-SE', voiceURI: 'sv-SE', lang: 'sv-SE' }, { name: 'hu-HU', voiceURI: 'hu-HU', lang: 'hu-HU' }, { name: 'zh-TW', voiceURI: 'zh-TW', lang: 'zh-TW' }, { name: 'es-ES', voiceURI: 'es-ES', lang: 'es-ES' }, { name: 'zh-CN', voiceURI: 'zh-CN', lang: 'zh-CN' }, { name: 'nl-BE', voiceURI: 'nl-BE', lang: 'nl-BE' }, { name: 'en-GB', voiceURI: 'en-GB', lang: 'en-GB' }, { name: 'ar-SA', voiceURI: 'ar-SA', lang: 'ar-SA' }, { name: 'ko-KR', voiceURI: 'ko-KR', lang: 'ko-KR' }, { name: 'cs-CZ', voiceURI: 'cs-CZ', lang: 'cs-CZ' }, { name: 'en-ZA', voiceURI: 'en-ZA', lang: 'en-ZA' }, { name: 'en-AU', voiceURI: 'en-AU', lang: 'en-AU' }, { name: 'da-DK', voiceURI: 'da-DK', lang: 'da-DK' }, { name: 'en-US', voiceURI: 'en-US', lang: 'en-US' }, { name: 'en-IE', voiceURI: 'en-IE', lang: 'en-IE' }, { name: 'hi-IN', voiceURI: 'hi-IN', lang: 'hi-IN' }, { name: 'el-GR', voiceURI: 'el-GR', lang: 'el-GR' }, { name: 'ja-JP', voiceURI: 'ja-JP', lang: 'ja-JP' }]

    var systemvoices

    var CHARACTER_LIMIT = 100
    var VOICESUPPORT_ATTEMPTLIMIT = 5
    var voicesupport_attempts = 0
    var fallbackMode = false
    var WORDS_PER_MINUTE = 140

    self.fallback_playing = false
    self.fallback_parts = null
    self.fallback_part_index = 0
    self.fallback_audio = null
    self.msgparameters = null
    self.timeoutId = null
    self.OnLoad_callbacks = []

    if (typeof speechSynthesis !== 'undefined') {
      speechSynthesis.onvoiceschanged = function () {
        systemvoices = window.speechSynthesis.getVoices()
        if (self.OnVoiceReady !== null) {
          self.OnVoiceReady.call()
        }
      }
    }

    self.default_rv = responsivevoices[0]
    self.OnVoiceReady = null
    self.init = function () {
      if (typeof speechSynthesis === 'undefined') {
        console.log('RV: Voice synthesis not supported')
        self.enableFallbackMode()
      } else {
        setTimeout(function () {
          var gsvinterval = setInterval(function () {
            var v = window.speechSynthesis.getVoices()
            if (v.length === 0 && (systemvoices === null || systemvoices.length === 0)) {
              voicesupport_attempts++
              if (voicesupport_attempts > VOICESUPPORT_ATTEMPTLIMIT) {
                clearInterval(gsvinterval)
                if (window.speechSynthesis !== null) {
                  if (self.iOS) {
                    console.log('RV: Voice support ready (cached)')
                    self.systemVoicesReady(cache_ios_voices)
                  } else {
                    console.log('RV: speechSynthesis present but no system voices found')
                    self.enableFallbackMode()
                  }
                } else {
                  self.enableFallbackMode()
                }
              }
            } else {
              console.log('RV: Voice support ready')
              self.systemVoicesReady(v)
              clearInterval(gsvinterval)
            }
          }, 100)
        }, 100)
      }
      self.Dispatch('OnLoad')
    }

    self.systemVoicesReady = function (v) {
      systemvoices = v
      self.mapRVs()
      if (self.OnVoiceReady !== null) {
        self.OnVoiceReady.call()
      }
    }

    self.enableFallbackMode = function () {
      fallbackMode = true
      console.log('RV: Enabling fallback mode')

      self.mapRVs()

      if (self.OnVoiceReady !== null) {
        self.OnVoiceReady.call()
      }
    }

    self.getVoices = function () {
      var v = []
      for (var i = 0; i < responsivevoices.length; i++) {
        v.push({ name: responsivevoices[i].name })
      }
      return v
    }

    self.speak = function (text, voicename, parameters) {
      self.msgparameters = parameters || {}
      self.msgtext = text
      self.msgvoicename = voicename
      var multipartText = []
      if (text.length > CHARACTER_LIMIT) {
        var tmptxt = text
        while (tmptxt.length > CHARACTER_LIMIT) {
          var p = tmptxt.search(/[:!?.]+/)
          var part = ''
          if (p === -1 || p >= CHARACTER_LIMIT) {
            p = tmptxt.search(/[,]+/)
          }
          if (p === -1 || p >= CHARACTER_LIMIT) {
            var words = tmptxt.split(' ')
            for (var i = 0; i < words.length; i++) {
              if (part.length + words[i].length + 1 > CHARACTER_LIMIT) {
                break
                part += (i !== 0 ? ' ' : '') + words[i]
          	  }
            }
          } else {
            part = tmptxt.substr(0, p + 1)
          }
          tmptxt = tmptxt.substr(part.length, tmptxt.length - part.length)
          multipartText.push(part)
        }
        if (tmptxt.length > 0) {
          multipartText.push(tmptxt)
        }
      } else {

        multipartText.push(text)
      }
      var rv
      if (voicename === null) {
        rv = self.default_rv
      } else {
        rv = self.getResponsiveVoice(voicename)
      }

      var profile = {}


      if (rv.mappedProfile !== null) {

        profile = rv.mappedProfile

      } else {

        profile.systemvoice = self.getMatchedVoice(rv)
        profile.collectionvoice = {}

        if (profile.systemvoice === null) {
          console.log('RV: ERROR: No voice found for: ' + voicename)
          return
        }
      }


      if (profile.collectionvoice.fallbackvoice === true) {
        fallbackMode = true
        self.fallback_parts = []
      } else {
        fallbackMode = false
      }

      self.msgprofile = profile

      for (var i = 0; i < multipartText.length; i++) {

        if (!fallbackMode) {
          var msg = new SpeechSynthesisUtterance()
          msg.voice = profile.systemvoice
          msg.voiceURI = profile.systemvoice.voiceURI
          msg.volume = profile.collectionvoice.volume || profile.systemvoice.volume || 1
          msg.rate = profile.collectionvoice.rate || profile.systemvoice.rate || 1
          msg.pitch = profile.collectionvoice.pitch || profile.systemvoice.pitch || 1
          msg.text = multipartText[i]
          msg.lang = profile.collectionvoice.lang || profile.systemvoice.lang
          msg.rvIndex = i
          msg.rvTotal = multipartText.length

          if (i === 0) {
            msg.onstart = self.speech_onstart
          }
          self.msgparameters.onendcalled = false

          if (parameters !== null) {



            if (i < multipartText.length - 1 && multipartText.length > 1) {
              msg.onend = parameters.onchunkend
              msg.addEventListener('end', parameters.onchuckend)
            } else {
              msg.onend = self.speech_onend
              msg.addEventListener('end', self.speech_onend)
            }



            msg.onerror = parameters.onerror || function (e) {
              console.log('RV: Error')
              console.log(e)
            }

            msg.onpause = parameters.onpause
            msg.onresume = parameters.onresume
            msg.onmark = parameters.onmark
            msg.onboundary = parameters.onboundary
          } else {
            msg.onend = self.speech_onend
            msg.onerror = function (e) {
              console.log('RV: Error')
              console.log(e)
            }
          }
          speechSynthesis.speak(msg)

        } else {

          var url = 'http://responsivevoice.org/responsivevoice/getvoice.php?t=' + multipartText[i] + '&tl=' + profile.collectionvoice.lang || profile.systemvoice.lang || 'en-US'
          var audio = document.createElement('AUDIO')
          audio.src = url
          audio.playbackRate = 1
          audio.preload = 'auto'
          audio.volume = profile.collectionvoice.volume || profile.systemvoice.volume || 1 // 0 to 1
          self.fallback_parts.push(audio)


        }


      }

      if (fallbackMode) {


        self.fallback_part_index = 0
        self.fallback_startPart()

      }

    }

    self.startTimeout = function (text, callback) {

      var multiplier = self.msgprofile.collectionvoice.timerSpeed
      if (self.msgprofile.collectionvoice.timerSpeed === null)
        multiplier = 1

      if (multiplier <= 0)
        return

      self.timeoutId = setTimeout(callback, multiplier * 1000 * (60 / WORDS_PER_MINUTE) * text.split(/\s+/).length) //avg 140 words per minute read time            
    }

    self.checkAndCancelTimeout = function () {
      if (self.timeoutId !== null) {
        clearTimeout(self.timeoutId)
        self.timeoutId = null
      }
    }

    self.speech_timedout = function () {
      self.cancel()
      self.speech_onend()

    }

    self.speech_onend = function () {
      self.checkAndCancelTimeout()

      if (self.cancelled === true) {
        self.cancelled = false
        return
      }

      if (self.msgparameters !== null && self.msgparameters.onend !== null && self.msgparameters.onendcalled !== true) {
        self.msgparameters.onendcalled = true
        self.msgparameters.onend()

      }

    }

    self.speech_onstart = function () {
      if (self.iOS)
        self.startTimeout(self.msgtext, self.speech_timedout)

      self.msgparameters.onendcalled = false
      if (self.msgparameters !== null && self.msgparameters.onstart !== null) {
        self.msgparameters.onstart()
      }

    }



    self.fallback_startPart = function () {

      if (self.fallback_part_index === 0) {
        self.speech_onstart()
      }

      self.fallback_audio = self.fallback_parts[self.fallback_part_index]

      if (self.fallback_audio === null) {

        console.log('RV: Fallback Audio is not available')

      } else {

        self.fallback_audio.play()
        self.fallback_audio.addEventListener('ended', self.fallback_finishPart)
      }
    }

    self.fallback_finishPart = function (e) {

      self.checkAndCancelTimeout()

      if (self.fallback_part_index < self.fallback_parts.length - 1) {
        self.fallback_part_index++
          self.fallback_startPart()

      } else {
        self.speech_onend()

      }

    }


    self.cancel = function () {

      self.checkAndCancelTimeout()

      if (fallbackMode) {
        if (self.fallback_audio !== null)
          self.fallback_audio.pause()
      } else {
        self.cancelled = true
        speechSynthesis.cancel()

      }
    }


    self.voiceSupport = function () {

      return ('speechSynthesis' in window)

    }

    self.OnFinishedPlaying = function (event) {
      if (self.msgparameters !== null) {
        if (self.msgparameters.onend !== null)
          self.msgparameters.onend()
      }

    }

    self.setDefaultVoice = function (voicename) {

      var vr = self.getResponsiveVoice(voicename)

      if (vr !== null) {
        self.default_vr = vr
      }

    }

    self.mapRVs = function () {

      for (var i = 0; i < responsivevoices.length; i++) {

        var rv = responsivevoices[i]

        for (var j = 0; j < rv.voiceIDs.length; j++) {

          var vcoll = voicecollection[rv.voiceIDs[j]]

          if (vcoll.fallbackvoice !== true) {
            var v = self.getSystemVoice(vcoll.name)
            if (v !== null) {
              rv.mappedProfile = {
                systemvoice: v,
                collectionvoice: vcoll
              }
              break
            }

          } else {

            rv.mappedProfile = {
              systemvoice: {},
              collectionvoice: vcoll
            }

            break

          }
        }
      }


    }

    self.getMatchedVoice = function (rv) {

      for (var i = 0; i < rv.voiceIDs.length; i++) {
        var v = self.getSystemVoice(voicecollection[rv.voiceIDs[i]].name)
        if (v !== null)
          return v
      }

      return null

    }

    self.getSystemVoice = function (name) {

      if (typeof systemvoices === 'undefined')
        return null

      for (var i = 0; i < systemvoices.length; i++) {
        if (systemvoices[i].name === name)
          return systemvoices[i]
      }

      return null

    }

    self.getResponsiveVoice = function (name) {

      for (var i = 0; i < responsivevoices.length; i++) {
        if (responsivevoices[i].name === name) {
          return responsivevoices[i]
        }
      }

      return null

    }

    self.Dispatch = function (name) {

      if (self.hasOwnProperty(name + '_callbacks') &&
        self[name + '_callbacks'].length > 0) {
        var callbacks = self[name + '_callbacks']
        for (var i = 0; i < callbacks.length; i++) {
          callbacks[i]()
        }

      }
    }

    self.AddEventListener = function (name, callback) {
      if (self.hasOwnProperty(name + '_callbacks')) {
        self[name + '_callbacks'].push(callback)
      } else {
        console.log('RV: Event listener not found: ' + name)
      }
    }

    if (typeof $ === 'undefined') {
      document.addEventListener('DOMContentLoaded', function () {
        self.init()
      })
    } else {

      $(document).ready(function () {
        self.init()
      })
    }


  }
  var responsiveVoice = new ResponsiveVoice()
}
