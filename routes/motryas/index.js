export function OPTIONS() {
  return { message: "POST, GET" };
}

export function GET() {
  return { characterName: "Motrya", feature: "Angry", mentalAge: 70 };
}

export function POST({ characterName, feature, mentalAge }) {
  return { characterName, feature, mentalAge };
}
