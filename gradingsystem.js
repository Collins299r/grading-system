def get_grade(score):
    if 70 <= score <= 100:
        return 'A'
    elif 60 <= score <= 69:
        return 'B'
    elif 50 <= score <= 59:
        return 'C'
    elif 45 <= score <= 49:
        return 'D'
    elif 40 <= score <= 44:
        return 'E'
    elif 0 <= score <= 39:
        return 'F'
    else:
        return 'Invalid score'

# Example usage
print(get_grade(85))   # Output: A
print(get_grade(43))   # Output: E
print(get_grade(-10))  # Output: Invalid score