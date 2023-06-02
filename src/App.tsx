import "./App.css";
import { Button, Form } from "react-bootstrap";
import Gallery from "./Gallery";
import { useState, createRef } from "react";
import Swal from "sweetalert2";

function App() {
	const [isPresentOpen, setIsPresentOpen] = useState(false);
	const [didRickRollCome, setDidRickRollCome] = useState(false);
	const [name, setName] = useState("");

	const videoRef: any = createRef();
	const scrollToBottom = () => {
		const body: any = document.querySelector("body");
		body.scrollTop = body.scrollHeight;
	};

	const handleTimeUpdate = () => {
		const currentTime = videoRef["current"]["currentTime"];
		const targetTimestamp = 6;

		if (currentTime >= targetTimestamp && !didRickRollCome) {
			setDidRickRollCome(true);
		}
	};
	return (
		<>
			<div className="row screen">
				<div className="col-md-12 screen first">
					<div className="row">
						<div className="col-md-12">
							<h1>BOO! Its me!</h1>
						</div>
						<div className="col-md-12">
							<Form.Select
								aria-label="What to call ya?"
								onChange={(e) => setName(e.target.value)}
							>
								<option value="">
									What should i call you?
								</option>
								<option value="Akkama">Akkama</option>
								<option value="Sis">Sis</option>
								<option value="Sister">Sister</option>
								<option value="baku">baku</option>
								<option value="Baku">Baku</option>
							</Form.Select>
						</div>
					</div>
				</div>
				{name ? (
					<>
						<p>
							<b>Scroll Down!</b>
						</p>
						<div className="col-md-12 screen">
							<div className="row">
								<div className="col-md-12">
									<h1>Who am I?</h1>
								</div>
								<div className="col-md-12">
									<p>
										I am your stupid brother with the name,
										Sivayogeith Umamaheswaran AKA
										thecodingsage.
									</p>
									<p>And why am I bothering you now?</p>
									<p>Well, Es ist dein Geburtstag!</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 screen">
							<div className="row">
								<div className="col-md-12">
									<h1>Happy Birthday, {name}!</h1>
								</div>
								<div className="col-md-12">
									<p>
										Sorry, but I can't give you an real-life
										present (cause im broke lol), but I have
										an present for you online.
									</p>
									<p>
										Which you will see at the last screen!
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-12">
									<h1>Pictures of You and ME!</h1>
								</div>
								<div className="col-md-12">
									<Gallery name={name} />
								</div>
								<div className="col-md-12">
									<p>
										Sorry about the glitches, Im such an bad
										dev!
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 screen">
							<div className="row">
								<div className="col-md-12">
									<h1>Remember my last present?</h1>
								</div>
								<div className="col-md-12">
									<video
										src="/oldpresent.mp4"
										width="750"
										height="500"
										controls
									></video>
								</div>
								<div className="col-md-12">
									<p>Yep, You recorded that! XD</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 screen">
							<div className="row">
								<div className="col-md-12">
									<h1>Emotional Stuff</h1>
								</div>

								<div className="col-md-12">
									<p>
										{name}, I love you! but, now you need to
										open my present, lol I might have copied
										my old present! XD
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-12 screen">
							<div className="row">
								<div className="col-md-12">
									<h1>Lets GO! Your present!</h1>
								</div>
								<div className="col-md-12">
									<p>Turn up the volume!</p>
								</div>

								<div className="col-md-12">
									{isPresentOpen ? (
										<video
											src="/present.mp4"
											width="750"
											height="500"
											ref={videoRef}
											onTimeUpdate={handleTimeUpdate}
											controls
										></video>
									) : null}
								</div>
							</div>
						</div>

						{isPresentOpen ? (
							<Button
								disabled={!didRickRollCome}
								onClick={() => {
									Swal.fire({
										title: "HAHAHAHHAHAHAHAHAHAH",
										html: `<p> I GOT YOU! MUHAHHAHAHHAHAH!</p> <p>NEVER GONNA GIVE YOU UP! XDXD oh my god! </p> <p>i cant stop laughing oh god!</p> <p>Oh my god ${name}! Anyway that was an joke</p> <p>SO Happy 20th Birthday, ${name}!</p>`,
										icon: "success",
									});
									scrollToBottom();
								}}
							>
								Move On!
							</Button>
						) : (
							<Button
								onClick={() => {
									setIsPresentOpen(true);
									scrollToBottom();
								}}
							>
								Open Present!
							</Button>
						)}
					</>
				) : null}
			</div>
		</>
	);
}

export default App;
