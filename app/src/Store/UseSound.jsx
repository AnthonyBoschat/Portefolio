import sound1 from "../Assets/Son1.mp3"
import sound2 from "../Assets/Son2.mp3"
import sound3 from "../Assets/Son3.mp3"


export const audiosParameter = {
    audiosList: [
        {id : 1, audio : sound1, currentTime: 0.39, volume : 0.5},
        {id : 2, audio : sound2, currentTime: 0, volume : 0.05},
        {id : 3, audio : sound2, currentTime: 0.1, volume : 1.0},
    ],
    audiosFrequence: 4,
    audiosChoice: 3
}

export const playSound = (step) => {
    const audioSelect = audiosParameter.audiosList.find(audio => audio.id === audiosParameter.audiosChoice)
    const audio = new Audio(audioSelect.audio)
    if(step % audiosParameter.audiosFrequence === 0){
        audio.pause()
        audio.currentTime = audioSelect.currentTime
        audio.volume = audioSelect.volume
        audio.play()
    }
}