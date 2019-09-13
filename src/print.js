export default function printMe() {
    console.log(process.env.NODE_ENV);
    const abradab = () => 'Id am printedasdfasdf from exported module';
    console.log(abradab());
}