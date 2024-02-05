from flask import Flask
from flask_cors import CORS, cross_origin
from flask import jsonify
import subprocess

app= Flask(__name__)
CORS(app)

@app.route('/mark_attendance')
@cross_origin(origin='*')
def mark_attendance():
    try:
        # path to quick attendance python script
        result = subprocess.run(["python","C:\\Users\\jenni\\desktop\\2U\\QuickAttendance\\attendance.py"], capture_output=True, text=True)
        
        if result.returncode == 0:
            return jsonify({'status': 'success', 'output': result.stdout})
        else:
            return jsonify({'status': 'error', 'output': result.stderr}), 500

    except Exception as e:
        return jsonify({'status': 'error', 'error_message': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, port=8080)                          