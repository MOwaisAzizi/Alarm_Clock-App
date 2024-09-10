import sound from './s.mp3'

function AudioPlayer() {
    return (
        <div className='sound'>

            <audio controls autoPlay>
                <source src={sound} type="audio/mpeg" />
                Not support that
            </audio>
        </div>
    )
}

export default AudioPlayer