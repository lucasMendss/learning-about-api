function tempo(req, res) {
    const dynamicDate = new Date();

    res.json({ date: dynamicDate.toTimeString() })
}
export default tempo