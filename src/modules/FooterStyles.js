import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;

export const Image = styled.img`
  max-width: 100%; // Ensure the image scales with its container
  height: auto; // Allow the image to maintain its aspect ratio
  display: block; // Remove any extra spacing around the image
`;

// ... (other styles)

export const Copyright = styled.div`
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
  text-align: left;
  margin-top: 20px;
  flex: 1; /* Add this to make it flexible */
`;

export const TermsAndConditions = styled.div`
  font-size: 14px;
  color: white;
  text-align: right;
  margin-top: 20px;
  margin-right: 220px; /* Add this to create space between the sections */
`;

// Sentence section
export const Sentence = styled.p`
  font-size: 18px;
  color: white;
  text-align: left;
  margin-top: 10px;
`;

export const Sentence1 = styled.p`
  font-size: 18px;
  color: white;
  text-align: left;
  margin-top: 12px;
`;


// SocialLink section
export const SocialLink = styled.a`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: green;
  }

  span {
    margin-left: 10px;
  }
`;

// HeartIcon section
export const HeartIcon = styled.span`
  color: red; /* Change the heart icon color as needed */
`;


