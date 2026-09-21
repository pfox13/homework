import React from "react";
import "./Music.css";

class Music extends React.Component {
    render() {
        return (
            <div className="music">
                <h1>Мой любимый музыкальный альбом</h1>

                <div className="album">
                    <img
                        src={this.props.image}
                        alt={this.props.title}
                    />

                    <div className="info">
                        <h2>{this.props.title}</h2>

                        <p>
                            <b>Исполнитель:</b> {this.props.artist}
                        </p>

                        <p>
                            <b>Год издания:</b> {this.props.year}
                        </p>

                        <p>
                            <b>Издатель:</b> {this.props.publisher}
                        </p>

                        <p>
                            <b>Жанр:</b> {this.props.genre}
                        </p>
                    </div>
                </div>

                <h2>Мои любимые песни</h2>

                <ul>
                    {this.props.songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Music;